import {ON_LOGIN_BTN_CLICK, ON_LOGIN_BTN_CLICK_ERROR, ON_LOGIN_BTN_CLICK_SUCCESS} from '../constant/ActionTypes'
import axios from 'axios'
import TaskListComp  from '../components/TaskListComp/TaskListComp'
import {Actions} from "react-native-router-flux";
export const  OnLoginBTNClick= (username,password)=>{
     return (dispatch)=> {
         axios.post("http://192.168.2.107:8080/base/logincontroller/stafflogin",
             {
                 staffId: username,
                 staffPwd: password
             }).then((res)=>{
                     Actions.TaskListComp()
                 console.log(res)
                 dispatch({
                     type:ON_LOGIN_BTN_CLICK_SUCCESS,
                     payload:{
                         staffId:res.data.data.staffId,
                         staffPwd:res.data.data.staffPwd
                     }
                 })
             }).catch((error)=>{
             // Actions.TaskListComp()
                 console.log(error)
         })
     }
}