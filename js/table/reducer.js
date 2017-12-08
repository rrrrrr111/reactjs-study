import {TABLE_RECORD_LAST_NAME_CHANGE, TABLE_FILTER_SEARCH, TABLE_RECORD_TOGGLE_ACTIVE} from "./actions";

let recordsSource = [
    {id: 1, firstName: "John", lastName: "Doe", active: false},
    {id: 2, firstName: "Mary", lastName: "Moe", active: false},
    {id: 3, firstName: "Peter", lastName: "Noname", active: true}
];

export function tableReducer(state = recordsSource, action) {
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
        default:
            return state
    }
}

