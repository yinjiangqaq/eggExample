'use strict';

const Controller = require('egg').Controller;
const path = require('path');
class AppController extends Controller {
  async render(ctx) {
    //客户端渲染
    const { app } = this;
    const { mode = 'csr' } = ctx.query;
    if (mode === 'csr') {
      this.ctx.logger.info(`AppController, ctx.url is ${this.ctx.request.url}`);
      // renderClient 前端渲染，Node层只做 layout.html和资源依赖组装，渲染交给前端渲染。与服务端渲染的差别你可以通过查看运行后页面源代码即可明白两者之间的差异
      // app.js 对应 webpack entry 的 app, 构建后文件存在 app/view 目录

      //在流量进入node层之后，根据请求头的user-agent，来区分设备类型，然后进入渲染不同的入口文件
      const device = this.ctx.helper.checkDevice(
        ctx.request.headers['user-agent']
      );
      if (device.isPhone || device.isAndroid || device.isTablet) {
        await this.ctx.renderClient(
          'h5.js',
          {
            url: this.ctx.url,
            env: this.ctx.app.config.env,
          },
          { layout: path.join(app.baseDir, 'app/web/view/layout.html') }
        );
      } else {
        await this.ctx.renderClient(
          'pc.js',
          {
            url: this.ctx.url,
            env: this.ctx.app.config.env,
          },
          { layout: path.join(app.baseDir, 'app/web/view/layout.html') }
        );
      }
    } else {
      //服务端渲染
      await this.ctx.render('app.js', { url: this.ctx.url });
    }
  }
}

module.exports = AppController;
