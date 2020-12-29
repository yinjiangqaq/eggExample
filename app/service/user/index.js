"use strict";

const service = require("egg").Service;

class UserService extends service {
  //查询用户是否存在
  async get(params) {
    const { app } = this;

    const user = await app.dbEggTest.user.findAll({
      where: {
        username: params.account,
        password: params.password,
      },
    });

    return !!user.length;
  }
}
