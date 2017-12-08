
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