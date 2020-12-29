import xhr from "axios";

xhr.defaults.baseURL = process.env.NODE_ENV === "development" ? "/" : `/`; //还没配置生产环境的baseUrl
xhr.defaults.withCredentials = true; // 允许携带cookie
// 公共get
export const get = (url, params = {}, config = {}) =>
  xhr({
    url,
    params,
    method: "get",
    ...config,
  }).catch((err) => {
    console.log(
      `${err.status || ""}：${err.statusText || ""} ${err.message || ""}`
    );
    return Promise.reject(err);
  });

// 公共post
export const post = (url, data = {}, config = {}) =>
  xhr({
    url,
    data: data || {},
    method: "post",
    ...config,
  }).catch((err) => {
    console.log(
      `${err.status || ""}：${err.statusText || ""} ${err.message || ""}`
    );
    return Promise.reject(err);
  });

export const jsonPost = (url, data = {}, config = {}) =>
  xhr({
    url,
    data: data || {},
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    transformRequest: (val) => JSON.stringify(val),
    ...config,
  }).catch((err) => {
    console.log(
      `${err.status || ""}：${err.statusText || ""} ${err.message || ""}`
    );
    return Promise.reject(err);
  });

// 公共put
export const put = (url, data = {}, config = {}) =>
  xhr({
    url,
    data: data || {},
    method: "put",
    ...config,
  }).catch((err) => {
    console.log(
      `${err.status || ""}：${err.statusText || ""} ${err.message || ""}`
    );
    return Promise.reject(err);
  });

// 公共delete
export const del = (url, params = {}) =>
  xhr({
    url,
    params,
    method: "delete",
  }).catch((err) => {
    console.log(
      `${err.status || ""}：${err.statusText || ""} ${err.message || ""}`
    );
    return Promise.reject(err);
  });
