'use strict';

const service = require('egg').Service;

class UserService extends service {
  //查询用户是否存在
  async get(where) {
    const { app } = this;
    //User要大写
    const options = {
      raw: true,
      where: where,
    };
    const user = await app.dbEggTest.User.findAll({ options });

    return user;
  }
  //更新用户信息
  async update(params, where) {
    const { app } = this;
    const options = {
      raw: true,
      where,
    };
    const user = await app.dbEggTest.User.findAll({ options });
 
    user[0].token = params;
    //更新实例
    const result = await user[0].save();
    //console.log(result.token);
    return result.token
  }
}
//写完要暴露出去
module.exports = UserService;
