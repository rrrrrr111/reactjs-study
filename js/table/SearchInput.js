require("bootstrap/dist/css/bootstrap.css");
import React from "react";


export class SearchInput extends React.Component {

    render() {
        return (
            <div style={{margin: '20px 20px 0 20px', width: '400px'}}>
                <input type="text" style={{width: '100%'}}
                       placeholder="Фильтр по имени"
                       onChange={this.props.onSearchInputChange}/>
            </div>
        )
    }
}