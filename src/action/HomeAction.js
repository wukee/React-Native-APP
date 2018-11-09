import {
    ON_HOME_BIN_CLICK,
    ON_HOME_BIN_CLICK_SUCCESS,
    ON_HOME_BIN_CLICK_ERROR,
} from '../constant/ActionTypes'
import axios from 'axios'
import {Actions} from "react-native-router-flux";
import TextDao from '../dao/TextDao'
export const onText = ()=>{
    return async (dispatch)=>{
        try{
            const res=await LoginDao.textlist();
            dispatch(on_Text_success())
        }catch(e){
            dispatch(on_Text_error())
        }
    }
}
export const on_Text_success=()=>{
    Actions.Homenum()
    return {
        type:ON_HOME_BIN_CLICK_SUCCESS
    }
}
export const on_Text_error=()=>{
    return{
        type:ON_HOME_BIN_CLICK_ERROR
    }
}
