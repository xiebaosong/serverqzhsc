class SQL {

	constructor() {}

	//注册增加用户信息
	registerSQL(o) {
		return "INSERT INTO `t_user` (`name`,`pwd`, `phone`, `registerTime`, `agreement`) VALUES ('" + o.name + "','" + o.pwd + "','" + o.phone + "','" + o.registerTime + "','" + o.agree + "')";
	}
	
	//注册查询用户电话
	findOneSQL(o, field) {
		return "SELECT `" + field + "` FROM `t_user` WHERE `" + field + "` = " + o[field] + "";
	}

	//登录
	loginSQL(o) {
		return "SELECT `phone`, `pwd`, `name`, `uid` FROM `t_user` WHERE `phone` = '" + o.phone + "' AND `pwd` = '" + o.pwd + "'";
	}

	//修改t_user loginStatus字段 0: 离线, 1: 在线
	updateLoginStatusSQL (o, val) {
		return "UPDATE `t_user` SET `loginStatus` = " + val + " WHERE `phone` = '" + o.phone + "'";
	}
	//手机修改t_user pwd字段 
	updateLoginpwdSQL (o) {
		return "UPDATE `t_user` SET `pwd` = '" + o.pwd + "' WHERE `phone` = '" + o.phone +"'"; 
	}
	//邮箱修改t_user pwd字段 
	emailUpdateLoginpwdSQL (o) {
		return "UPDATE `t_user` SET `pwd` = '" + o.pwd + "' WHERE `email` = '" + o.email +"'"; 
	}
	//查询用户邮箱
	fineOneEmailSQL (email) {
		return "SELECT `email` FROM `t_user` WHERE `email` = '" + email + "'";
	}
	
}

module.exports = new SQL();