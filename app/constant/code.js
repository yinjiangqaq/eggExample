'use strict';

//错误码

const RESPONSE_CODE = {
  FAIL: -1,
  SUCCESS: 0,
  PARAMS_ERROR: 18004, //参数非法
  NOT_LOGIN: 12001, //未登录
  TOKEN_OUTDATED: 12002, //token失效
};

const CODE_MESSAGES = {
  '-1': 'fail',
  0: 'OK',
  18004: 'params error',
  12001: 'not login',
  12002: 'token outdated',
};

module.exports = { RESPONSE_CODE, CODE_MESSAGES };
