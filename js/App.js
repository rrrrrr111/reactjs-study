import React from "react";
import {render} from "react-dom";
import {GridComponent} from "./GridComponent.js";
import {SearchInput} from "./SearchInput.js";

const dataSource = [
    {firstName: "John", lastName: "Doe", active: false},
    {firstName: "Mary", lastName: "Moe", active: false},
    {firstName: "Peter", lastName: "Noname", active: true}
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            records: []
        };
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.onEditRecords = this.onEditRecords.bind(this);
    }

    // в конструкторе this.props еще не заданы
    componentDidMount() {
        this.setState({
            records: dataSource
        });
    }

    onSearchInputChange(e) {
        let value = e.target.value;
        let searchStr = value.toUpperCase();
        let filteredRecords = dataSource.filter((record) => {
            return (
                record.firstName.toUpperCase().includes(searchStr)
                || record.lastName.toUpperCase().includes(searchStr)
            )
        });

        this.setState({
            records: filteredRecords
        });
    };

    onEditRecords(records) {
        this.setState({
            records: records
        });
    }

    render() {
        let {records} = this.state;
        return (
            <div>
                <SearchInput onSearchInputChange={this.onSearchInputChange}/>
                <GridComponent records={dataSource} onEditRecords={this.onEditRecords}/>
            </div>
        )
    }
}

render(
    <App/>,
    document.getElementById('app')
);
