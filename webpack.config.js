/**
 * 文档链接：https://www.yuque.com/easy-team/easywebpack/build
 */
//const merge = require("webpack-merge");
//const customConfig = require("./webpack/dev.conf"); //这里可以通过process.env.NODE_ENV来区分环境，换不同的配置
const alias = require("./webpack/alias");

module.exports = {
  egg: true,
  framework: "vue",
  resolve: {
    alias,
  },
  entry: {
    app: "app/web/page/app/index.js",
  },
  devtool: "source-map",
  deploy: {
    installNode: false,
    installDeps: false,
    nodejs: false, // 是否把 node 打进 node_modules, 默认 false
    filename: "dist",
    source: [
      "app",
      "config",
      "public",
      "app.js",
      "favicon.ico",
      "package.json",
    ],
    target: "./",
    done: async function(filepath) {
      console.log(">>filepath", filepath);
    },
  },
  // customize(webpackConfig) {
  //   return merge(webpackConfig, customConfig());
  // },
};
