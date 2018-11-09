/**
 *          Created by luyon on 17/3/15.
 *
 *                  网络引擎定义
 *    (定义请后端交互其中两种方法：get post,数据格式均为json)
 */

"use strict";

//==============
// 服务依赖引入
//==============

import axios from 'axios' ;


//请求头host变量声明
let __HOST__ ;

if (__DEV__) {
    //开发环境请求头地址
    __HOST__ = "" ;
}else{
    /**
     * 生产环境请求头地址 -- 不要爆漏外网IP，只允许填写域名
     * */
    __HOST__ = "./" ;
}


/**
 *
 *      网络引擎函数使用方法
 *      networkEngine(
 *          "get/post"(string),                 请求方法设置必填，无默认值
 *          "relativePath"(string),             请求相对路径，必填，引用UrlManager组建
 *          data : {
 *              param1 : value1 ,               请求所带参数
 *              param2 : value2 ,
 *              .
 *              .
 *              .
 *          }
 *      ).then(
 *          data=>{success do }                 请求成功执行函数
 *      ).catch(
 *          err=>{ error do }                   请求失败执行代码
 *      )
 *
 * */

const NetworkEngine = (type,relativePath,data={})=>{
    return axios({
        method: type,
        url: __HOST__ + relativePath ,
        data:Object.assign({

        },data)
    })
} ;

export { NetworkEngine as default } ;

