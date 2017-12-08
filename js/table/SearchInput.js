require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import {connect} from "react-redux";
import {onFilterSearch} from "./actions";


class SearchInput extends React.Component {

    onSearchInputChange(e) {
        const {dispatch} = this.props;
        dispatch(onFilterSearch(e))
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