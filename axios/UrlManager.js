/**
 *      Created by luyon on 17/3/15.
 *
 *          前端所有请求路径管理文件
 *
 *          （定义所有请求的相对路径）
 */


/**
 *
 *      模块使用：
 *          1、将该模块引入需要的组建中 ；
 *          2、const urlManager = new UrlManager() ; urlManager.test()  即可获得return的相对路径
 *
 * */

class UrlManager {
    authencatedUser() {
        return "http://192.168.1.102:8888/services/releaseStatus";
    }
    flight() {
        return "http://192.168.3.47:8081/flight/manualFly/setflight"
    }
    oilplants() {
        return "http://192.168.3.47:8082/task/dispacher/OilDensity"
    }
    taskStatus() {
        return "http://192.168.3.46:8082/task/task/modifyStatus"
    }
    login() {
        return "http://192.168.3.44:8080/base/logincontroller/stafflogin";
    }

    //测试
    filmList() {
        return "http://api.apiopen.top/musicRankings";
    }
    getPhoneCode() {
        return "http://192.168.1.102:8888/services/users/send_code";
    }
    regisAccount() {
        return "http://192.168.1.102:8888/services/users/register";
    }
    filmDetailGetCreator() {
        return "http://192.168.1.102:8888/services/users/filmCreator";
    }
    filmGetCommentFirst() {
        return "http://192.168.1.102:8888/services/comment/list";
    }
    commentByOne() {
        return "http://192.168.1.102:8888/services/reply/find_by_comment";
    }
    campaignList() {
            return "http://192.168.1.129:7878/services/campaign/list";
        }
        // 企业认证
    authenticationOrg() {
            return "http://192.168.1.112:8888/services/authentication/organization"
        }
        //个人认证
    authenticationPersonal() {
        return "http://192.168.1.102:8888/services/authentication/personal "
    }
    filmVideoUrl() {
            return "http://192.168.1.112:9797/services/film/find_video"
        }
        //作品搜索
    searchFilm() {
        return "http://192.168.1.102:9797/services/film/search"
    }
    otherFilms() {
            return "http://192.168.1.102:9797/services/film/find_other_films"
        }
        //作者搜索
    searchPerson() {
        return "http://192.168.1.112:8888/services/authentication/search"
    }
    filmDescription() {
            return "http://192.168.1.102:9797/services/film/detail"
        }
        //类别
    filmCategory() {
        return "http://127.0.0.1:9797/services/film/searchAllCategory"
    }
}

export default UrlManager;