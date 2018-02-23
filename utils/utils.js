const SMSClient = require('@alicloud/sms-sdk');

const crypto = require('crypto');

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.163.com', //主机地址
  port: 25, //端口
  auth: {
    user: '13411174697@163.com', //发件邮箱
    pass: 'xbs123' //授权码  
  }
});


class Utils {
  constructor () {}

  //短信功能
  sendMessage(phone, code) {
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
    const accessKeyId = 'LTAIGUZ98O0Duuh6';
    const secretAccessKey = 'zKHhJ1ebr4p0DfcY9Yn9EO1IwKVak9';
    //初始化sms_client
    let smsClient = new SMSClient({accessKeyId, secretAccessKey})
    //发送短信
    return smsClient.sendSMS({
      PhoneNumbers: phone, //接收短信手机号
      SignName: '千纸商城', //签名名称
      TemplateCode: 'SMS_119091898', //模板号
      TemplateParam: '{"code":' + code +'}' //模板验证码
    });
  }

  //加密功能
  addCrypto(o, field) {
    //使用md5方式加密
    let md5 = crypto.createHash('md5');

    //指定加密字段
    md5.update(o[field]);

    o[field] = md5.digest('hex');
  }

  //发邮件
  sendEmail (options, fn) {
    transporter.sendMail(options, fn);
  }

}

module.exports = new Utils();