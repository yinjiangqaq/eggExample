'use strict';

const path = require('path');
const fs = require('fs');
const rootPath = fs.realpathSync(process.cwd()); //项目的根目录
const resolve = (relativePath) => path.resolve(rootPath, relativePath);
const commonPath = resolve('app/web/common'); //公共目录
const projectPath = resolve('app/web/page/app'); //子项目，前端项目的根目录

module.exports = {
  COMMON: commonPath,
  '@': projectPath, // 子项目根目录
  '@router': path.resolve(projectPath, 'router'), // 子项目组件库
  '@store': path.resolve(projectPath, 'store'), // 子项目vuex
  '@componnets':path.resolve(projectPath, 'components'),//子项目componnets
  '@views': path.resolve(projectPath, 'views'), // 子项目页面
  '@assets': path.resolve(projectPath, 'assets'), //子项目公共资源
  '@services': path.resolve(projectPath, 'services'), // 子项目接口api库
};
