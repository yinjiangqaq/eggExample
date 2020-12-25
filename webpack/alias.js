'use strict'

const path = require('path');
const fs = require('fs')
const rootPath = fs.realpathSync(process.cwd())//项目的根目录
const resolve = relativePath => path.resolve(rootPath, relativePath)
const commonPath = resolve('app/web/common')//公共目录
const projectPath = resolve('app/web/page/app') //子项目，前端项目的根目录


module.exports = {
    'COMMON': commonPath,
    '@': projectPath, // 子项目根目录
}