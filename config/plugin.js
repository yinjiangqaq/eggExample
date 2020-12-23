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
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
// 上传
exports.multipart = {
  enable: true,
};



