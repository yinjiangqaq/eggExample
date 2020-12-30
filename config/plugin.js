'use strict';

/** @type Egg.EggPlugin */
'use strict';

exports.validate = {
    enable: true,
    package: 'egg-validate',
};
// 跨域
exports.cors = {
    enable: true,
    package: 'egg-cors',
};
// mysql

// 上传
exports.multipart = {
    enable: true,
};
//打开服务端ssr
exports.vuessr = {
    enable: true,
    package: 'egg-view-vue-ssr'
};
exports.sequelize = {
        enable: true,
        package: 'egg-sequelize'
    }
    //使用router.namespace的插件，方便路由管理
exports.routerPlus = {
    enable: true,
    package: 'egg-router-plus',
};