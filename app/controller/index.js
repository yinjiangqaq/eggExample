'use strict';

const Controller = require('egg').Controller

class AppController extends Controller {


    async render(ctx) {
        //客户端渲染
        const { mode = 'csr' } = ctx.query;
        if (mode === 'csr') {
            this.ctx.logger.info(`AppController, ctx.url is ${this.ctx.request.url}`)
            await this.ctx.renderClient('app.js', { url: this.ctx.url, env: this.ctx.app.config.env });
        } else {
            await this.ctx.render('app.js', { url: this.ctx.url});
        }
    }
}

module.exports = AppController