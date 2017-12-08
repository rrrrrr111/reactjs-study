require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import {connect} from "react-redux";


class SearchInput extends React.Component {

    onSearchInputChange(e) {
        const {dispatch} = this.props;

        dispatch({
            type: 'TABLE_RECORD_SEARCH_FILTER',
            value: {searchStr: e.target.value.toUpperCase()}
        })
    }

    render() {
        return (
            <div style={{margin: '20px 20px 0 20px', width: '400px'}}>
                <input type="text" style={{width: '100%'}}
                       placeholder="Фильтр по имени"
                       onChange={this.onSearchInputChange.bind(this)}/>
            </div>
        )
    }
}

export default connect((state) => {
    return {} // этот компонент ничего не юзает извне
})(SearchInput)