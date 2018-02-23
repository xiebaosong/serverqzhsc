const RouteController = require(__basename + '/routesController/routesController.js');

exports.routes = function (app) {
	//手机注册修改密码验证码路径
	app.get('/message', RouteController.sendMessageController);
	//注册
	app.post('/register', RouteController.registerController);
	//登录
	app.post('/login', RouteController.loginController);
	//手机修改密码
	app.post('/phoneModification', RouteController.phoneModificationController);
	//验证邮箱
	app.post('/emailcode', RouteController.emailcodeController);
	//修改密码
	app.post('/modifypwd', RouteController.modifypwdController);

}