import axios from 'axios';
import config from '../../Constant/Config'
export default class FilghtDao {
    constructor(){
        //车辆绑定
        this.Vehicle=config.serverIP+"flight/carbindingcontroller/carBinDing"
        //上传
        this.Upload=config.serverIP+"/task/oilSupplier/receipt"
    }
    autom(url,id,plate){
        return axios({
            url:url||this.Vehicle,
            method:"POST",
            data:{
                sfvhStaffId:id,
                vehiNo:plate
            }
        })
    }
    upload(url,id,num){
        return axios({
            url:url||Upload,
            method:"POST",
            data:num
        })
    }
}
