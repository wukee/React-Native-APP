"use strict";
import { combineReducers } from 'redux';
import GlobalReducer from "./GlobalReducer";
import TaskReducer from './TaskReducer'
// Add more
const appReducer = combineReducers({
    GlobalReducer,
    TaskReducer
});

// Setup root reducer

export default appReducer;
