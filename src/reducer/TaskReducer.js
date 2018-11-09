import {ON_HTTP_TASKLIST_INIT,
    ON_WEBSOCKET_TASKLIST_UPDATE,
    ON_HTTP_GET_OIL_INFORMATION,
    ON_CHANGE_TASK_INFORMATION_BUTTON_STATE,
    ON_WEBSOCKET_GET_OILMESS,
    ON_WEBSOCKET_TASKLIST_ADD,
    ON_WEBSOCKET_TASKLIST_DELETE
} from '../constant/ActionTypes';
import immutable from 'immutable'
const INITIAL_STATE = immutable.Map({
    //任务列表
    tasks:[
        {
            flgtId:'1',				//pk
            flgtStarmark:'',			//特殊标记
            flgtAFlno:'CA6102',			//进港航班号
            flgtDFlno:'CA6103',			//出港航班号
            flgtExedate:'2018-11-2',			//执行日期
            flgtDAdid:'经停',	//进出类型
            flgtDFlti:'国内|国际',	//航班属性
            flgtDGame:'前方起飞',//航班状态
            flgtDAlcname:'',			//隶属单位
            flgtAOrgnm:'',				//起始地
            flgtDTrsnm:	'',			//经停(备降)
            flgtDDesnm:	'',			//目的地
            flgtDAcname:'A3213',				//机型
            flgtDRegn:'747',				//机号
            flgtDPlacecode:'14',			//机位
            flgtDVialc:	'',			//航线
            flgtAStot:	'15:15',			//计划到达时间
            flgtAEtot:'16:00',				//预计到达时间
            flgtDAtot:'15:40',				//实际到达时间
            flgtDEtot:'16:50',				//预计起飞时间
            taskId:'321',				//pk
            taskStarmark:'',			//特殊标记
            taskCreStaffId:'张三',		//调度员
            taskOpeStaffId:	'李四',	//加油员
            taskAsgTime:'15:42',			//调度时间
            taskStatus:	'待接受',//任务状态
            taskAccTime:'',			//任务起始时间(接受任务时间)
            taskDoneTime:'',			//任务结束时间
            taskVehiNo:	'',		//加油车编号
            wellHydrtPitNo:'',		//地井编号
            taskFuelRecptNo:'',		//油单编号
        },
        {
            flgtId:'2',				//pk
            flgtStarmark:'',			//特殊标记
            flgtAFlno:'CA8930',			//进港航班号
            flgtDFlno:'CA3213',			//出港航班号
            flgtExedate:'2018-11-2',			//执行日期
            flgtDAdid:'经停',	//进出类型
            flgtDFlti:'国内|国际',	//航班属性
            flgtDGame:'前方起飞',//航班状态
            flgtDAlcname:'',			//隶属单位
            flgtAOrgnm:'',				//起始地
            flgtDTrsnm:	'',			//经停(备降)
            flgtDDesnm:	'',			//目的地
            flgtDAcname:'A3213',				//机型
            flgtDRegn:'747',				//机号
            flgtDPlacecode:'14',			//机位
            flgtDVialc:	'',			//航线
            flgtAStot:	'15:15',			//计划到达时间
            flgtAEtot:'16:00',				//预计到达时间
            flgtDAtot:'15:40',				//实际到达时间
            flgtDEtot:'16:50',				//预计起飞时间
            taskId:'1233',				//pk
            taskStarmark:'',			//特殊标记
            taskCreStaffId:'王五',		//调度员
            taskOpeStaffId:	'马六',	    //加油员
            taskAsgTime:'15:42',			//调度时间
            taskStatus:	'待接受',//任务状态
            taskAccTime:'',			//任务起始时间(接受任务时间)
            taskDoneTime:'',			//任务结束时间
            taskVehiNo:	'',		//加油车编号
            wellHydrtPitNo:'',		//地井编号
            taskFuelRecptNo:'',		//油单编号
        }
    ],
    //油料参数信息
    oilInfo:{},
    //接受按钮状态
    buttonState:false,
    //实时加油量
    oilMess:"100"
});

function handleTaskListInit(state,payload) {
    //todo:联调时检查路径和数值问题
    return state.update('tasks',val =>{return payload});
}



function handleOilInformationInit(state,payload){
    return state.update('oilInfo',val =>payload);
}
function handleOnChangeTaskInfoButtonState(state,payload){
    return state.update('buttonState',val =>payload)
}
function handleOnWebsocketOilMess(state,payload) {
    return state.update('oilMess',val=>payload)
}
function handleOnWebsocketTaskListADD(state,payload) {
    return state.update('tasks',val =>{ val.push(payload);
    return [...val]
    });
}

function handleOnWebsocketTaskListDelete(state,payload){
   let _tasks = state.get('tasks');
   let x = _tasks.map((item,index)=>{
      if(item.taskId == payload.taskId){
          return index;
      }
   });
   x = x.filter((val)=>{
      return !(!val || val === "");
   });
   _tasks.splice(x[0]-1,1);
   console.log(_tasks);
   return  state.update('tasks',val=>[..._tasks]);
}

export default function(state=INITIAL_STATE,action){
    switch (action.type) {
        case ON_HTTP_TASKLIST_INIT:{
            //初始化任务列表
          return handleTaskListInit(state,action.payload)
        }
        case ON_WEBSOCKET_TASKLIST_ADD:{
            //任务列表添加项
            return handleOnWebsocketTaskListADD(state,action.payload);
        }
        case ON_WEBSOCKET_TASKLIST_DELETE:{
            //取消任务
            return handleOnWebsocketTaskListDelete(state,action.payload);
        }
        case ON_WEBSOCKET_GET_OILMESS:{
            return handleOnWebsocketOilMess(state,action.payload)
        }
        case ON_HTTP_GET_OIL_INFORMATION:{
            //获取油料参数数据
            return handleOilInformationInit(state,action.payload)
        }
        case ON_CHANGE_TASK_INFORMATION_BUTTON_STATE:{
            //修改按钮状态
            return handleOnChangeTaskInfoButtonState(state,action.payload)
        }
        default:return state;
    }
}