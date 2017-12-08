require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import {render} from "react-dom";


export class SummaryActiveUsers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Активных пользователей: {this.props.records.filter((record) => record.active).length}</div>
        )
    }
}