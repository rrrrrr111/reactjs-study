require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import Grid from "./Grid.js";
import {SearchInput} from "./SearchInput.js";
import {SummaryActiveUsers} from "./SummaryActiveUsers.js";
import {SummaryUsers} from "./SummaryUsers.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {records: []};

        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.onEditRecords = this.onEditRecords.bind(this);
    }

    // в конструкторе this.props еще не заданы, кроме того это позволит отрисовать пустой каркас
    componentDidMount() {
        this.setState({
            records: this.props.records
        });
    }

    onSearchInputChange(e) {
        let value = e.target.value;
        let searchStr = value.toUpperCase();
        let filteredRecords = this.props.records.filter((record) => {
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

// проверим тип проперти таблицы
Grid.propTypes = {
    records: PropTypes.array.isRequired
};

// замапим стейт редух на пропсы этого компонента
function mapStateToProps(state) {
    return {
        records: state.records
    }
}

// экспортируем не оригинальный компонент а компонент обернутый редухом,
// если экспортировать просто класс не обернутый то будет чистый реакт без редуховых фич
export default connect(mapStateToProps)(Table)