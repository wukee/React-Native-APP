import axios from 'axios';
import config from '../../Constant/Config'
 class LoginDao{
    constructor() {
        this.LoginURL=config.serverIP+"/base/logincontroller/stafflogin"
    }
    login(username,password,url){
        return axios({
            url:url||this.LoginURL,
            method:`POST`,
            data:{
                staffId:username,
                staffPwd:password
            }
        })
    }

}
const Dao=new  LoginDao();
export default Dao