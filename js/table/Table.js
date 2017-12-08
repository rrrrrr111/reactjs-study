require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import Grid from "./Grid.js";
import SearchInput from "./SearchInput.js";
import {SummaryActiveUsers} from "./SummaryActiveUsers.js";
import {SummaryUsers} from "./SummaryUsers.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {records: []};
    }

    // в конструкторе this.props еще не заданы, кроме того это позволит отрисовать пустой каркас
    componentDidMount() {
        this.setState({
            records: this.props.records
        });
    }

    componentWillReceiveProps(nextProps) {
        // Поскольку этот компонент прокидывает дочерним не пропсы которые ему прокидывает редух,
        // а упралвяет хранением в собственном стейт, то ему нужно также реализовать метод ожидающий обновления свойств.
        // Локальный стейт позволяет сделать предварительное отображение компонента и потом перерисовать его после
        // получения пропертей
        this.setState({
            records: nextProps.records
        });
    }

    render() {
        let records = this.state.records;

        return (
            <div>
                <SearchInput/>
                <Grid records={records}>
                    <div style={{margin: '20px', width: '400px'}}>
                        <SummaryUsers records={records}/>
                        &nbsp;&nbsp;
                        <SummaryActiveUsers records={records}/>
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