require("bootstrap/dist/css/bootstrap.css");
import React from "react";


export class SummaryActiveUsers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>Активных пользователей: {this.props.records.filter((record) => record.active).length}</span>
        )
    }
}