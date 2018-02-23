/*
Navicat MySQL Data Transfer

Source Server         : QZHSC
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : qianzhiheshangcheng

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-22 19:15:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `pwd` varchar(50) NOT NULL,
  `oldpwd` varchar(50) DEFAULT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `registerTime` datetime NOT NULL,
  `loginstatus` varchar(255) DEFAULT NULL,
  `agreement` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('27', 'xbs123', 'e10adc3949ba59abbe56e057f20f883e', null, '13411174697', null, '2018-01-17 23:09:30', null, '100');
