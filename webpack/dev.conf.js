'use strict';

const merge = require('webpack-merge');
const baseWebpackConfig = require('./base.conf');

module.exports = () => {
  return merge(baseWebpackConfig, {
    // devServer配置不可用
  });
};
