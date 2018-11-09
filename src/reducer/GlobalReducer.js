import {ON_LOGIN_BTN_CLICK_SUCCESS} from '../constant/ActionTypes';
import {produce} from 'immer'
const INITIAL_STATE ={
    staffId:'',
    staffPwd:''
};
export default function(state=INITIAL_STATE,action){
    switch (action.type) {
        case ON_LOGIN_BTN_CLICK_SUCCESS:{
            return produce(state,draftState => {
                draftState.staffId=action.payload.staffId;
                draftState.staffPwd=action.payload.staffPwd;
            })
        }
        default:return state;
    }
}