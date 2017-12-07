import React from "react";
import {render} from "react-dom";
import {GridComponent} from "./GridComponent.js";
import {SearchInput} from "./SearchInput.js";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {records: []};

        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.onEditRecords = this.onEditRecords.bind(this);
    }

    // в конструкторе this.props еще не заданы, кроме того это позволит отрисовать пустой каркас
    componentDidMount() {
        this.setState({
            records: this.props.dataSource
        });
    }

    onSearchInputChange(e) {
        let value = e.target.value;
        let searchStr = value.toUpperCase();
        let filteredRecords = this.props.dataSource.filter((record) => {
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
        const records = this.state.records;
        return (
            <div>
                <SearchInput onSearchInputChange={this.onSearchInputChange}/>
                <GridComponent records={records} onEditRecords={this.onEditRecords}/>
            </div>
        )
    }
}

const dataSource = [
    {firstName: "John", lastName: "Doe", active: false},
    {firstName: "Mary", lastName: "Moe", active: false},
    {firstName: "Peter", lastName: "Noname", active: true}
];

render(
    <App dataSource={dataSource}/>,
    document.getElementById('app')
);
