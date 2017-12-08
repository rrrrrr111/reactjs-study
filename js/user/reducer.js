import {ADD_USER_DETAILS_DATA} from "./actions";

let userDetailsState = {};

export function userDetailsReducer(state = userDetailsState, action) {
    switch (action.type) {

        case ADD_USER_DETAILS_DATA: {
            return action.value;
        }
        default:
            return state
    }
}