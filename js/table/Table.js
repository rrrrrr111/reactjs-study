require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import Grid from "./Grid";
import SearchInput from "./SearchInput";
import {SummaryActiveUsers} from "./SummaryActiveUsers";
import {SummaryUsers} from "./SummaryUsers";
import {loadTableData} from "./actions";
import {connect} from "react-redux";


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {records: [], filtered: []};
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
            filtered: props.filtered
        });
    }

    loadData() {
        let {dispatch} = this.props;
        dispatch(loadTableData());
    }

    componentWillReceiveProps(nextProps) {
        // Поскольку этот компонент прокидывает дочерним не пропсы которые ему прокидывает редух,
        // а упралвяет хранением в собственном стейт, то ему нужно также реализовать метод ожидающий обновления свойств.
        // Локальный стейт позволяет сделать предварительное отображение компонента и потом перерисовать его после
        // получения пропертей
        this.pushState(nextProps);
    }

    render() {
        let {records, filtered} = this.state;

        return (
            <div>
                <SearchInput/>
                <Grid records={filtered}>
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

// замапим стейт редух на пропсы этого компонента
function mapStateToProps(state) {
    return state.table;
}

// экспортируем не оригинальный компонент а компонент обернутый редухом,
// если экспортировать просто класс не обернутый то будет чистый реакт без редуховых фич
export default connect(mapStateToProps)(Table)