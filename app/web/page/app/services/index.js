import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : `/`; //还没配置生产环境的baseUrl
axios.defaults.withCredentials = true; // 允许携带cookie

//http 请求拦截器
axios.interceptors.request.use((config) => {
  //每次请求带上token

  config.headers['authorization'] = window.localStorage.getItem('token') || '';
  return config;
});

//http response 拦截器
axios.interceptors.response.use((response) => {
  const { code, data, msg } = response.data;
  //未登录跳转到登录页
  if (code === 12001 || code === 12002) {
    window.localStorage.removeItem('token');
    location.href = `${window.location.origin}/login`;
  }
  return response.data;
});
// 公共get
export const get = (url, params = {}, config = {}) =>
  axios({
    url,
    params,
    method: 'get',
    ...config,
  }).catch((err) => {
    console.log(
      `${err.status || ''}：${err.statusText || ''} ${err.message || ''}`
    );
    return Promise.reject(err);
  });

// 公共post
export const post = (url, data = {}, config = {}) =>
  axios({
    url,
    data: data || {},
    method: 'post',
    ...config,
  }).catch((err) => {
    console.log(
      `${err.status || ''}：${err.statusText || ''} ${err.message || ''}`
    );
    return Promise.reject(err);
  });

export const jsonPost = (url, data = {}, config = {}) =>
  axios({
    url,
    data: data || {},
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    transformRequest: (val) => JSON.stringify(val),
    ...config,
  }).catch((err) => {
    console.log(
      `${err.status || ''}：${err.statusText || ''} ${err.message || ''}`
    );
    return Promise.reject(err);
  });

// 公共put
export const put = (url, data = {}, config = {}) =>
  axios({
    url,
    data: data || {},
    method: 'put',
    ...config,
  }).catch((err) => {
    console.log(
      `${err.status || ''}：${err.statusText || ''} ${err.message || ''}`
    );
    return Promise.reject(err);
  });

// 公共delete
export const del = (url, params = {}) =>
  axios({
    url,
    params,
    method: 'delete',
  }).catch((err) => {
    console.log(
      `${err.status || ''}：${err.statusText || ''} ${err.message || ''}`
    );
    return Promise.reject(err);
  });
