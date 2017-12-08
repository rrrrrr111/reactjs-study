// подменим имя импортирумой функции т к она дублируется тут
import {addData as addUserDetailsData} from "../user/actions";

export const TABLE_RECORD_TOGGLE_ACTIVE = 'TABLE_RECORD_TOGGLE_ACTIVE';
export function toggleActive(index) {
    return {
        type: TABLE_RECORD_TOGGLE_ACTIVE,
        value: index
    };
}

export const TABLE_RECORD_LAST_NAME_CHANGE = 'TABLE_RECORD_LAST_NAME_CHANGE';
export function changeLastName(index, lastName) {
    return {
        type: 'TABLE_RECORD_LAST_NAME_CHANGE',
        value: {index, lastName}
    };
}

export const TABLE_FILTER_SEARCH = 'TABLE_FILTER_SEARCH';
export function onFilterSearch(e) {
    return {
        type: TABLE_FILTER_SEARCH,
        value: {searchStr: e.target.value.toUpperCase()}
    };
}

export const TABLE_START_LOADING = 'TABLE_START_LOADING';
export function startLoading() {
    return {
        type: TABLE_START_LOADING
    }
}

export const TABLE_STOP_LOADING = 'TABLE_STOP_LOADING';
export function stopLoading() {
    return {
        type: TABLE_STOP_LOADING
    }
}

export const TABLE_ADD_DATA = 'TABLE_ADD_DATA';
export function addData(value) {
    return {
        type: TABLE_ADD_DATA,
        value
    }
}

export function loadTableData() {
    return (dispatch) => {
        dispatch(startLoading());
        fetch('http://localhost:4730')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(addData(json.tableRecords));
                dispatch(addUserDetailsData(json.detailsRecords));
            })
            .then(function () {
                dispatch(stopLoading());
            })
    }
}