'use strict';

const path = require('path');
const fs = require('fs');
const rootPath = fs.realpathSync(process.cwd()); //项目的根目录
const resolve = (relativePath) => path.resolve(rootPath, relativePath);
const commonPath = resolve('app/web/common'); //公共目录
// const projectPath = resolve('app/web/page/app'); //旧版本单页面的 子项目，前端项目的根目录
const projectPath = resolve('app/web'); //子项目，前端项目的根目录
const pcPath = resolve('app/web/page/pc'); // PC项目根目录
const h5Path = resolve('app/web/page/h5'); // h5项目根目录

module.exports = {
  COMMON: commonPath,
  '@': projectPath, // 子项目根目录

  /**废弃的旧版本的单页面的一些通用路径 */
  // '@router': path.resolve(projectPath, 'router'), // 子项目组件库
  //'@store': path.resolve(projectPath, 'store'), // 子项目vuex,双端的状态应该各自维护一份
  // "@views": path.resolve(projectPath, "views"), // 子项目页面
  '@assets': path.resolve(projectPath, 'assets'), //子项目公共资源,双端公用的一些公共资源
  '@services': path.resolve(projectPath, 'services'), // 子项目接口api库,因为请求的逻辑是双端共用的

  '@pc': pcPath, //PC项目根目录
  '@h5': h5Path, //h5项目根目录
};
