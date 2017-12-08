let recordsSource = [
    {id: 1, firstName: "John", lastName: "Doe", active: false},
    {id: 2, firstName: "Mary", lastName: "Moe", active: false},
    {id: 3, firstName: "Peter", lastName: "Noname", active: true}
];

export function tableReducer(state = recordsSource, action) {
    switch (action.type) {
        case 'TABLE_RECORD_TOGGLE_ACTIVE' : {
            let newState = [...state];
            let index = action.value;

            newState[index].active = !newState[index].active;
            return newState;
        }
        case "TABLE_RECORD_SEARCH_FILTER": {
            //Filter will be implemented later
        }
        default:
            return state
    }
}

