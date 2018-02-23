/*
	protocal => agree
		100: 同意千纸鹤协议
		101: 不同意千纸鹤协议
*/
module.exports = {
	protocal: {
		agree: 101
	},
	register: {
		success: {
			msg: '注册成功',
			statusCode: 200
		},
		info: {
			msg: '该手机号已被注册',
			statusCode: 201
		},
		error: {
			msg: '出错啦',
			statusCode: 202
		}
	},
	login:{
		success: {
			msg: '登录成功',
			statusCode: 300
		},
		info: {
			msg: '该手机号没注册',
			statusCode: 301
		},
		error: {
			msg: '出错啦',
			statusCode: 302
		}
	},
	phoneModification:{
		success: {
			msg: '修改密码成功',
			statusCode: 400
		},
		info: {
			msg: '修改密码失败，请再次修改',
			statusCode: 401
		},
		error: {
			msg: '出错啦',
			statusCode: 402
		}
	},
	emailModification:{
		success: {
			msg: '修改密码成功',
			statusCode: 500
		},
		info: {
			msg: '修改密码失败，请再次修改',
			statusCode: 501
		},
		error: {
			msg: '出错啦',
			statusCode: 502
		}
	}
}