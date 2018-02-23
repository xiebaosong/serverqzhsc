const Utils = require(__basename + '/utils/utils.js');

const API = require(__basename + '/service/api.js');

const SQL = require(__basename + '/lib/sql/sql.js');

const common = require(__basename + '/common/common.js');

class RouteController {
	constructor () {}

	//短信验证码功能
	sendMessageController (req, res) {
		//随机生成6位验证码
		let time = new Date().getTime().toString();
		let code = time.slice(time.length - 6);
		res.send({code:code});
		// req.query: 请求查询参数
		// Utils.sendMessage(req.query.phone, code)
		// 	.then((data) => {
		//     let {Code} = data;
		//     if (Code === 'OK') {
		//        // 处理返回参数
		//        res.json({code: code, msg: '发送短信验证码成功', status: 1});

		//     }
		// 		}, (err) => {
		//     	console.log(err);
		//     	res.json({msg: '发送短信验证码失败', status: 0});
		// 	})
	}

	//注册功能
	registerController (req, res) {
		// req.query 请求参数
		// console.log(req.query);
		//req.body 请求参数, POST请求携带参数
		// console.log('req.body ==> ', req.body);
		//查询手机号是否被注册

		let selectSQL = SQL.findOneSQL(req.body, 'phone');
		
		API.query(selectSQL)
			.then(result => {	
			console.log(result)		
				if (result[0].length == 1) {
					res.json(common.register.info);
				} else {
					//如果手机号没有被注册, 则执行插入sql语句
					Utils.addCrypto(req.body, 'pwd');
					let sql = SQL.registerSQL(req.body);
					// console.log(sql);
					API.query(sql)
						.then(data => {
							res.json(common.register.success);
						})
						.catch(err => {
							res.json(common.register.error);
						})
				}
			})
			.catch(err => {
				res.json(common.register.error);
			})
	}

	//登录验证功能
	loginController (req, res) {
		//req.body {}
		Utils.addCrypto(req.body, 'pwd');
		let sql = SQL.loginSQL(req.body);
		console.log(sql)
		API.query(sql)
			.then(result => {
				console.log(result)
				if (result[0].length === 1) {
					common.login.success.uid = result[0][0].uid;
					common.login.success.phone = result[0][0].phone;
					common.login.success.name = result[0][0].name;
					let updatesql = SQL.updateLoginStatusSQL(req.body, 1);
					API.query(updatesql)
						.then(result => {
							res.json(common.login.success);
						})
						.catch(err => {
							res.json(common.login.info);
						})
				} else {
					res.json(common.login.info);
				}
			})
			.catch(err => {
				res.json(common.login.error);
			})
	}

	//手机修改密码
	phoneModificationController(req,res){
		let sql=SQL.findOneSQL(req.body,'phone');
		console.log(sql)
		API.query(sql)
		.then(function(result){
			if (result[0].length == 1) {
				Utils.addCrypto(req.body, 'repwd');
				console.log(result)
				// let updatesql = SQL.updateLoginpwdSQL(req.body, pwd);
				res.send('xiexie')
			}
			
		})
		.catch(err => {
				res.json(common.login.error);
		})

	}


	//邮箱修改密码
	emailcodeController (req, res) {
		//随机生成6位验证码
		let time = new Date().getTime().toString();
		let code = time.slice(time.length - 6);
		let sql = SQL.fineOneEmailSQL(req.query.email);
		API.query(sql)
			.then(result => {
				if (result[0].length == 1) {
					let options = {
						from: 'kangliuyong@126.com', //发件地址
						to: req.query.email, //收件地址
						subject: '修改密码', //主题标题
						text: '验证码',
						html: '<b>您的验证码是: ' + code + ',一切向您索取验证码都是骗子</b>' //邮件内容模板
					};
					Utils.sendEmail(options , () => {
						res.send({msg: '验证码已发至您的邮箱, 请注意查收!', statusCode: 700, validCode: code});
					})
				} else {
					res.json({msg: '该邮箱未被绑定', statusCode: 701})
				}
			})
			.catch(err => {
				res.send('出错啦')
			})
	}

	//修改密码
	modifypwdController (req, res) {
		Utils.addCrypto(req.body, 'pwd');
		let sql = SQL.modifyPwdSQL(req.body);
		API.query(sql)
			.then(result => {
				res.json({msg: '修改密码成功', statusCode: 800});
			})
			.catch(err => {
				res.send('出错啦');
			})
	}
}

module.exports = new RouteController();