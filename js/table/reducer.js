import {
    TABLE_ADD_DATA,
    TABLE_FILTER_SEARCH,
    TABLE_RECORD_LAST_NAME_CHANGE,
    TABLE_RECORD_TOGGLE_ACTIVE,
    TABLE_START_LOADING,
    TABLE_STOP_LOADING
} from "./actions";

let tableInitialState = {
    records: [],
    filtered: [],
    loading: false
};

// в редьюсер прилетает та часть стора к которой он прикреплен в общем сторе,
// при первом вызове соотвтесвеено там прилетит undefined
export function tableReducer(state = tableInitialState, action) {

    switch (action.type) {

        case TABLE_RECORD_TOGGLE_ACTIVE : {
            let records = [...state.records];  // создадим новый массив, концепция immutable
            let index = action.value;

            records[index].active = !records[index].active;
            // при возврате из редьюсера нужно делать новый объект, тут везде концепция immutable
            return Object.assign({}, state, {records});
        }

        case TABLE_RECORD_LAST_NAME_CHANGE : {
            let records = [...state.records];
            let {index, lastName} = action.value;

            records[index].lastName = lastName;
            return Object.assign({}, state, {records});
        }

        case TABLE_FILTER_SEARCH: {
            let {records} = state;
            let {searchStr} = action.value;

            let filtered = filterRecords(records, searchStr);
            return Object.assign({}, state, {filtered});
        }

        case TABLE_START_LOADING: {
            return Object.assign({}, state, {loading: true});
        }

        case TABLE_STOP_LOADING: {
            return Object.assign({}, state, {loading: false});
        }

        case TABLE_ADD_DATA: {
            let records = action.value;
            return Object.assign({}, state, {records: records, filtered: records});
        }

        default:
            return state
    }
}

let filterRecords = (records, searchStr) => {
    return records.filter((record) => {
        return (
            record.firstName.toUpperCase().includes(searchStr)
            || record.lastName.toUpperCase().includes(searchStr)
        )
    });
};