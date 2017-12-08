let recordsSource = [
    {id: 1, firstName: "John", lastName: "Doe", active: false},
    {id: 2, firstName: "Mary", lastName: "Moe", active: false},
    {id: 3, firstName: "Peter", lastName: "Noname", active: true}
];

export function tableReducer(state = recordsSource, action) {
    switch (action.type) {
        default:
            return state
    }
}

