
'use strict';
module.exports = () => {
  const config = exports = {};
  config.CONST2 = 'const2';
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'xx.xxx.xxx.xxx',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'appTest',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  return {
    ...config,
  };
};

