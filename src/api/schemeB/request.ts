import axios from 'axios';
import { mapValues, omit } from 'lodash';

const { CancelToken } = axios;
const requestList = [];
const requestWait = 3000;
const cancelRepeatRequest = (reqList, url, cancel, errorMessage) => {
    const errorMsg = errorMessage || '';
    for (let i = 0; i < reqList.length; i++) {
        if (reqList[i] === url) {
            cancel(errorMsg);
            return;
        }
    }
    requestList.push(url);
};
const allowRepeatRequest = (reqList, url) => {
    for (let i = 0; i < reqList.length; i++) {
        reqList.splice(i, 1);
        break;
    }
};
const request = axios.create({
    baseURL: '/api',
    timeout: 1000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

request.interceptors.request.use(
    (config) => {
        let cancel;
        config.cancelToken = new CancelToken((c) => {
            cancel = c;
        });
        cancelRepeatRequest(requestList, config.url, cancel, `${config.url}请求被中断`);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
request.interceptors.response.use(
    (res) => {
        setTimeout(() => {
            allowRepeatRequest(requestList, res.config.url);
        }, requestWait);
        return res;
    },
    (error) => {
        if (error && error.response) {
            const { status } = error.response;
            switch (status) {
                case 400: {
                    error.message = '错误请求';
                    break;
                }
                case 401: {
                    error.message = '未授权,请重新登录!';
                    break;
                }
                case 403: {
                    error.message = '请重新登录!';
                    break;
                }
                case 404: {
                    error.message = '请求错误，未找到该资源!';
                    break;
                }
                case 405: {
                    error.message = '请求方法未允许!';
                    break;
                }
                case 408: {
                    error.message = '请求超时!';
                    break;
                }
                case 413: {
                    error.message = '上传内容超出大小限制!';
                    break;
                }
                case 500: {
                    error.message = '服务端错误!';
                    break;
                }
                case 501: {
                    error.message = '网络未实现!';
                    break;
                }
                case 502: {
                    error.message = '网络异常!';
                    break;
                }
                case 503: {
                    error.message = '网络不可用!';
                    break;
                }
                case 504: {
                    error.message = '网络超时!';
                    break;
                }
                case 505: {
                    error.message = 'http版本不支持该请求!';
                    break;
                }
                default: {
                    error.message = `连接错误${status}`;
                }
            }
        }
        return Promise.reject(error);
    }
);

export const requestTransform = (config) => {
    return mapValues(config, (value) => {
        let method;
        let url;
        if (typeof value === 'string') {
            url = value;
        } else {
            url = value.url;
            method = value.method;
            config = omit(value, ['url', 'method']);
        }
        method = method || 'get';
        if (method === 'get') {
            return (params?) => {
                return new Promise((resolve, reject) => {
                    request[method](url, { params, ...config })
                        .then((result) => {
                            resolve(result.data);
                        })
                        .catch((error) => {
                            reject(error);
                        });
                });
            };
        }
        if (method === 'post') {
            return (params?) => {
                return new Promise((resolve, reject) => {
                    request[method](url, params, config)
                        .then((result) => {
                            resolve(result.data);
                        })
                        .catch((error) => {
                            reject(error);
                        });
                });
            };
        }
        return () => {};
    });
};

export default request;
