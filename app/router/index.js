'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;

  //除了api之外的路由，跳到index controller，根据传递的参数，看是服务端渲染还是客户端渲染
  router.get(/^(?!\/api).*/, controller.index.render);
};
