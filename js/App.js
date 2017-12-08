import React from "react";
import {render} from "react-dom";
import {Grid} from "./Grid.js";
import {SearchInput} from "./SearchInput.js";
import {SummaryActiveUsers} from "./SummaryActiveUsers.js";
import {SummaryUsers} from "./SummaryUsers.js";


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
                <Grid records={records} onEditRecords={this.onEditRecords}>
                    <div>
                        <SummaryUsers records={records}/>
                        <SummaryActiveUsers records={records}/>
                    </div>
                </Grid>
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
