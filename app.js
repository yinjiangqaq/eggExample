'use strict';

const path = require('path');

const fs = require('fs');

/**
 * @param {Egg.Application} app - egg application
 * 这是egg项目的一些生命周期函数,各个生命周期的具体看egg.js的文档
 */

class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  configWillLoad() {
    // 此时 config 文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // 注意：此函数只支持同步调用
  }

  async didLoad() {
    // 所有的配置已经加载完毕
    // 可以用来加载应用自定义的文件，启动自定义的服务
    // 例如：加载自定义的目录
    this.loadDirs();
  }

  loadConfig() {}

  loadDirs() {
    const { app } = this;
    app.config.loaderDirs.forEach((dir) => {
      app.loader.loadToApp(path.join(__dirname, `app/${dir}`), `${dir}`, {
        fieldClass: `${dir}Classes`,
        initializer(factory) {
          if (typeof factory === 'function') {
            return new factory(app);
          }
          return factory;
        },
      });
    });
  }
}

module.exports = AppBootHook;
