import {ADD_USER_DETAILS_DATA} from "./actions";

let initialUserDetailsState = {};

export function userDetailsReducer(state = initialUserDetailsState, action) {
    switch (action.type) {

        case ADD_USER_DETAILS_DATA: {
            let userDetails = action.value;
            return Object.assign({}, state, userDetails);
        }
        default:
            return state
    }
}