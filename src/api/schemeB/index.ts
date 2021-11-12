import { requestTransform } from './request';

export default requestTransform({
    login: {
        url: 'user/login',
        method: 'post',
    },
    logout: {
        url: 'user/logout',
        method: 'post',
    },
    // 对象写法
    // findUser:{
    //   url:'/user/list',
    //   method:'get'
    // },
    // 字符串写法
    findUser: '/user/find',
    addUser: {
        url: '/user/add',
        method: 'post',
    },
});
