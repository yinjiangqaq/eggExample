//context.keys()是module下面的所有js文件
const context = require.context('./', true, /\.js$/);
//筛选了module文件夹index.js除外的所有js文件

const filePaths = context
  .keys()
  .filter(
    (s) => /^\.\/[^/]*\.js$/g.test(s) || /^\.\/[^/]*\/index\.js$/g.test(s)
  )
  .filter((s) => s !== './index.js');//找过Modlue下各个模块的index.js，除了module/index.js

const modules = {};

filePaths.forEach(
  (path) =>
    (modules[
      path.replace(/^\.\/([^/]*)(\/index)?\.js$/g, '$1')
    ] = require(`${path}`).default)
);
Object.keys(modules).forEach((key) => (modules[key].namespaced = true));

export default modules;
