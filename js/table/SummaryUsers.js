require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import {render} from "react-dom";


export class SummaryUsers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>Всего пользователей: {this.props.records.length}</span>
        )
    }
}