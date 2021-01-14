'use strict';

const MODULE = '[middleware checkLoginApi]';

const jwt = require('jsonwebtoken');
/**
 * 检查登录状态
 */

module.exports = () => {
  return async function checkLoginApi(ctx, next) {
    ctx.logger.info(`enter into ${MODULE}`);
    const { app } = ctx;
    const { RESPONSE_CODE } = app.constant.code;
    //检测token 是否过期
    const token = ctx.request.header.authorization;
    console.log('请求头的token', token);
    if (token) {
      //解码token
      try {
        jwt.verify(token, ctx.app.config.keys);
      } catch (error) {
        if (error.name === 'TokenExpiredError') {
          return ctx.fail({
            code: RESPONSE_CODE.TOKEN_OUTDATED,
            msg: 'token过期',
          });
        }
        return ctx.fail({
          code: RESPONSE_CODE.TOKEN_OUTDATED,
          msg: 'token失效',
        });
      }
      const user = await ctx.service.user.index.get({ token });
      console.log('现在登录的用户的token', user[0].token);
      await next();
    } else {
      console.log(ctx.url);
      if (ctx.url === '/login' || ctx.url === '/api/user/login' ) {
        await next(); //如果是第一次登录的，继续下面的逻辑
      } else {
        //如果是非登录请求的，则后端重定向到登录
        if (app.config.env === 'local') return next();
        return ctx.response.redirect('/login');
      }
    }
  };
};
