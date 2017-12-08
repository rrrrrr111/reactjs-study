import {combineReducers} from "redux";
import {tableReducer} from "./table/reducer";
import {userDetailsReducer} from "./user/reducer";


export const rootReducer = combineReducers({
    userDetails: userDetailsReducer,
    table: tableReducer
});