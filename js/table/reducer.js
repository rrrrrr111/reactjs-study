import {
    ADD_DATA,
    START_LOADING,
    STOP_LOADING,
    TABLE_FILTER_SEARCH,
    TABLE_RECORD_LAST_NAME_CHANGE,
    TABLE_RECORD_TOGGLE_ACTIVE
} from "./actions";

let tableState = {
    records: [],
    filtered: [],
    loading: false
};

export function tableReducer(state = tableState, action) {
    switch (action.type) {
        case TABLE_RECORD_TOGGLE_ACTIVE : {
            let newState = [...state];
            let index = action.value;

            newState[index].active = !newState[index].active;
            return newState;
        }
        case TABLE_RECORD_LAST_NAME_CHANGE : {
            let newState = [...state];
            let {index, lastName} = action.value;

            newState[index].lastName = lastName;
            return newState;
        }
        case TABLE_FILTER_SEARCH: {
            let newState = [...state];
            let {searchStr} = action.value;

            return recordsSource.filter((record) => {
                return (
                    record.firstName.toUpperCase().includes(searchStr)
                    || record.lastName.toUpperCase().includes(searchStr)
                )
            });
        }
        case START_LOADING: {
            return Object.assign({}, state, {loading: true});
        }
        case STOP_LOADING: {
            return Object.assign({}, state, {loading: false});
        }
        case ADD_DATA: {
            return Object.assign({}, state, {
                records: action.value
            });
        }
        default:
            return state
    }
}

