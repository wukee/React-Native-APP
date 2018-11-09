import axios from 'axios';
import config from '../../Constant/Config'
export default class TextDao{
    constructor(){
        //任务列表
        this.TextURL=config.serverIP+"/task/stbutton/findBus?task_ope_staff_id=000002"
        //任务详情
        this.TextDeta=config.serverIP+'/task/stbutton/findBusId'
        //人员列表
        this.Person=config.serverIP+'/base/staffinfocontroller/getStaffList'
    }
    //任务列表
      textlist(url){
        return axios({
            url:url||this.TextURL,
            method:"GET",
        })
      }
      //任务详情
    textdata(id,url){
        return axios({
            url:url||this.TextDeta,
            method:"GET",
            data:{
                task_id:id
            }
        })
    }
    //人员列表
    personnel(url){
        return axios({
            url:url||this.Person,
            method:"GET",
        })
    }
}