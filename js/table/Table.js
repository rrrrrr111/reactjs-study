require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import Grid from "./Grid";
import SearchInput from "./SearchInput";
import {SummaryActiveUsers} from "./SummaryActiveUsers";
import {SummaryUsers} from "./SummaryUsers";
import {startLoading, addData, stopLoading} from "./actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {records: [], filtered: [], loading: false};
    }

    // в конструкторе this.props еще не заданы, кроме того это позволит отрисовать пустой каркас
    componentDidMount() {
        this.refs.filterInput && this.refs.filterInput.focus();
        this.loadData();
        this.pushState(this.props);
    }

    pushState(props) {
        this.setState({
            records: props.records,
            filtered: props.filtered,
            loading: props.loading
        });
    }

    loadData() {
        let {dispatch} = this.props;
        dispatch(startLoading());
        fetch('http://localhost:4730')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(addData(json.tableRecords))
            })
            .then(function () {
                dispatch(stopLoading());
            })
    }

    componentWillReceiveProps(nextProps) {
        // Поскольку этот компонент прокидывает дочерним не пропсы которые ему прокидывает редух,
        // а упралвяет хранением в собственном стейт, то ему нужно также реализовать метод ожидающий обновления свойств.
        // Локальный стейт позволяет сделать предварительное отображение компонента и потом перерисовать его после
        // получения пропертей
        this.pushState(nextProps);
    }

    render() {
        let {records, filtered, loading} = this.state;

        return (
            <div>
                <SearchInput/>
                <Grid records={records} filtered={filtered} loading={loading}>
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
    records: PropTypes.array.isRequired,
    filtered: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

// замапим стейт редух на пропсы этого компонента
function mapStateToProps(state) {
    return {
        records: state.table.records,
        filtered: state.table.filtered,
        loading: state.table.loading
    }
}

// экспортируем не оригинальный компонент а компонент обернутый редухом,
// если экспортировать просто класс не обернутый то будет чистый реакт без редуховых фич
export default connect(mapStateToProps)(Table)