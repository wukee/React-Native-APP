import {ON_WEBSOCKET_GET_OILMESS, ON_HTTP_TASKLIST_INIT,
    ON_WEBSOCKET_TASKLIST_UPDATE,ON_HTTP_GET_OIL_INFORMATION,
    ON_CHANGE_TASK_INFORMATION_BUTTON_STATE,ON_WEBSOCKET_TASKLIST_DELETE,ON_WEBSOCKET_TASKLIST_ADD} from "../constant/ActionTypes";
import dao from '../dao/taskDao/taskDao'
//任务详情实时接收工控机传送的加油量
export function onGetOilMessWebsocketMessage(payload) {
    return {
        type:ON_WEBSOCKET_GET_OILMESS,
        payload:{
            oilMess: payload
        }
    }
}
export function onChangeTaskInfoButtonState(payload) {
    return {
        type:ON_CHANGE_TASK_INFORMATION_BUTTON_STATE,
        payload:payload
    }
}
//任务列表初始化
export function taskListInit(id) {
    return (dispatch)=>{
        dao.taskListInitDao(
            id,
            (data)=>{
                dispatch(onTaskListInit(data.data))
            },
            (err)=>{
                console.log(err);
            },
        )
    }
}
function onTaskListInit(payload) {
    return {
        type:ON_HTTP_TASKLIST_INIT,
        payload:payload
    }
}

//任务列表实时接收pc端传来的数据刷新
export function onTaskListWebsocketMessage(payload) {

    if(payload.type == '13'){
        return {
            type:ON_WEBSOCKET_TASKLIST_ADD,
            payload:payload.content
        }
    }
    // if(payload.type == '14'){
    //     return {
    //         type:ON_WEBSOCKET_TASKLIST_UPDATE,
    //         payload:payload.content
    //     };
    // }
    if(payload.type == '16'){
        return {
            type:ON_WEBSOCKET_TASKLIST_DELETE,
            payload:payload.content
        };
    }
}

//请求油料参数

export function oilInfoInit() {
    return (dispatch)=>{
        dao.oilInformationInitDao(
            (data)=>{
                console.log(data.data);
                dispatch(onOilInfoInit(data.data))
            },
            (err)=>{
                console.log(err);
            },
        )
    }
}

function onOilInfoInit(payload){
    return {
        type:ON_HTTP_GET_OIL_INFORMATION,
        payload:payload
    }
}