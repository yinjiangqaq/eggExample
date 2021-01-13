'use strict';
module.exports = (app) => {
  const { STRING, BIGINT, INTEGER } = app.Sequelize;
  const user = app.dbEggTest.define(
    'user',
    {
      id: {
        type: INTEGER(11),
        primaryKey: true,
      },
      username: STRING(100),
      password: STRING(100),
      token: STRING(255),
      email: STRING(254),
      createTime: INTEGER(11),
      phone: STRING(20),
    },
    {
      freezeTableName: true,
      tableName: 'user',
      timestamps: false,
      underscored: true,
    }
  );
  return user;
};

/**
 * 
 * 用户表:MYSQL
 *
 #
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL COMMENT '用户名',
  `password` varchar(100) DEFAULT NULL COMMENT '用户名',
  `email` varchar(254) DEFAULT NULL COMMENT '邮箱',
  `create_time` int DEFAULT '0' COMMENT '创建时间',
  `phone` varchar(20) DEFAULT NULL COMMENT '手机号码',
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='eggTest用户信息'
 */
