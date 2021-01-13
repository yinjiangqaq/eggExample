'use strict';

const controller = require('egg').Controller;
const MODULE = '[MODULE USERCONTROLLER]';
const jwt = require('jsonwebtoken');
class UserController extends controller {
  /**
   * 接口描述
   * 用户登录
   * 请求方式：post
   * 参数：{
   * account：string
   *
   * password: string
   * }
   */

  async login() {
    const { ctx, app } = this;
    const query = ctx.request.body;
    const { RESPONSE_CODE } = app.constant.code;
    const option = {
      username: query.account,
      password: query.password,
    };
    this.logger.info(`enter into ${MODULE}`);

    if (query.account.length === 0) {
      //记得把错误抛出去
      return ctx.fail({
        code: RESPONSE_CODE.PARAMS_ERROR,
        msg: '账号不能为空',
      });
    }
    if (query.password.length === 0) {
      return ctx.fail({
        code: RESPONSE_CODE.PARAMS_ERROR,
        msg: '密码不能为空',
      });
    }
    const user = await ctx.service.user.index.get(option);
    if (!user) {
      return ctx.fail({ msg: '账号密码错误' });
    } else {
      //如果有用户，登录成功，更新token
      const content = { name: user[0].id }; //根据用户的userId生成token的主体

      const secretOrPrivateKey = app.config.keys; //用app.keys做加密的密钥
      const token = jwt.sign(content, secretOrPrivateKey, {
        expiresIn: 60 * 60 * 1, //一小时后过期
      });
      //更新该用户的token
      const result = await ctx.service.user.index.update(token, {
        id: user[0].id,
      });
      if (result) {
        return ctx.success({ data: token, msg: ' 登录成功 ' });
      }
    }
  }
}

module.exports = UserController;
