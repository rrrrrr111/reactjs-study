require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import {render} from "react-dom";
import {Grid} from "./Grid.js";
import {SearchInput} from "./SearchInput.js";
import {SummaryActiveUsers} from "./SummaryActiveUsers.js";
import {SummaryUsers} from "./SummaryUsers.js";

const dataSource = [
    {id: 1, firstName: "John", lastName: "Doe", active: false},
    {id: 2, firstName: "Mary", lastName: "Moe", active: false},
    {id: 3, firstName: "Peter", lastName: "Noname", active: true}
];

export class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {records: []};

        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.onEditRecords = this.onEditRecords.bind(this);
    }

    // в конструкторе this.props еще не заданы, кроме того это позволит отрисовать пустой каркас
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
        return (
            <div>
                <SearchInput onSearchInputChange={this.onSearchInputChange}/>
                <Grid records={this.state.records} onEditRecords={this.onEditRecords}>
                    <div style={{margin: '20px', width: '400px'}}>
                        <SummaryUsers records={this.state.records}/>
                        &nbsp;&nbsp;
                        <SummaryActiveUsers records={this.state.records}/>
                    </div>
                </Grid>
            </div>
        )
    }
}