import axios from 'axios';
import config from '../../constant/config'

class taskDao {
    constructor(){
        this.serverIP = config.serverIP;
        this.sockeIP = config.sockeIP;
    }
    //任务列表初始化
    taskListInitDao(parameter,successCallback,errorCallback){
        axios({
            url:this.serverIP+':8081/flight/stbutton/findBus',
            method:'GET',
            params:{taskOpeStaffId:parameter},
            headers:{
                'X-Requested-With':'XMLHttpRequest',
                'Content-Type':'application/json;charset=UTF-8'
            }
        }).then((res)=>{
            successCallback(res.data);
            console.log(res);
        }).catch((err)=>{
            errorCallback(err);
            console.log(err);
        })
    }
    //油料信息初始化
    oilInformationInitDao(successCallback,errorCallback){
        axios({
            url:this.serverIP+':8081/flight/fuelCharge/getFuelInfo',
            method:'GET',
            //params:parameter,
            headers:{
                'X-Requested-With':'XMLHttpRequest',
                'Content-Type':'application/json;charset=UTF-8'
            }
        }).then((res)=>{
            successCallback(res.data);
        }).catch((err)=>{
            errorCallback(err);
            console.log(err);
        })
    }
    //接受任务发送请求
    onClickAcceptTaskButtonDao(parameter,successCallback,errorCallback){
        axios({
            url:this.serverIP+':8081/flight/stbutton/stMethod',
            method:'PUT',
            data:parameter,
            headers:{
                'X-Requested-With':'XMLHttpRequest',
                'Content-Type':'application/json;charset=UTF-8'
            }
        }).then((res)=>{
            successCallback(res.data);
            console.log(res);
        }).catch((err)=>{
            errorCallback(err);
            console.log(err);
        })
    }
    //上传油单信息请求
    onUpdateinvoiceInformationDao(parameter,successCallback,errorCallback){
        axios({
            url:this.serverIP+':8081/flight/fuelCharge/receipt',
            method:'POST',
            data:parameter,
            headers:{
                'X-Requested-With':'XMLHttpRequest',
                'Content-Type':'application/json;charset=UTF-8'
            }
        }).then((res)=>{
            successCallback(res.data);
            console.log(res);
        }).catch((err)=>{
            errorCallback(err);
            console.log(err);
        })
    }
}

const dao =  new taskDao();
export default dao;