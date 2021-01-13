/* eslint valid-jsdoc: "off" */

'use strict';
const fs = require('fs');
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608725246223_8546';

  // add your middleware config here
  //全局配置的middleware,也就是每次router映射到相应的controller都会经过的middleware
  config.middleware = ['checkLoginApi'];

  // config.checkLoginApi = {
  //   match: '/token',
  // };

  //加载app下的额外的目录,然后在app.js里面加载对应的目录
  config.loaderDirs = ['constant'];
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // config.mysql = {
  //   // 单数据库信息配置
  //    //直接在model文件夹下面写相应的表就行了
  //   client: {
  //     // host
  //     host: 'localhost',
  //     // 端口号
  //     port: '3306',
  //     // 用户名
  //     user: 'root',
  //     // 密码
  //     password: 'myshard',
  //     // 数据库名
  //     database: 'eggTest',
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };

  config.sequelize = {
    dialectOptions: {
      connectTimeout: 60000,
      requestTimeout: 999999,
    },
    datasources: [
      //多数据库配置
      {
        delegate: 'dbEggTest', // load all models to app.adminModel and ctx.adminModel
        baseDir: 'model/dbEggTest', // load models from `app/admin_model/*.js`
        dialect: 'mysql',
        database: 'eggTest',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'myshard',
        define: {
          timestamps: false,
          freezeTableName: true,
        },
      },
    ],
  };

  // 跨域配置
  // config.cors = {
  //   origin: ['*'],
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  //   credentials: true,
  // };
  config.vuessr = {
    layout: path.join(appInfo.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(appInfo.baseDir, 'app/view'),
    },
    afterRender(html) {
      return html.replace(/__BASE_URL__/g, '');
    },
  };
  config.security = {
    // csrf: false,
    csrf: {
      enable: false, // 前后端分离，post请求不方便携带_csrf
      ignoreJSON: true,
      headerName: 'authorization',
    },
    methodnoallow: {
      enable: false,
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
