require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import {hashHistory} from "react-router";
import PropTypes from "prop-types";


export class GridRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: ''
        };
        // для всех обработчиков событий в React нужно делать привязку контекста
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onLastNameBlur = this.onLastNameBlur.bind(this);
        this.showUserDetails = this.showUserDetails.bind(this);
    }

    componentDidMount() { // срабатывает при первой отрисовке
        this.setState({
            lastName: this.props.record.lastName
        })
    }

    componentWillReceiveProps(nextProps) { // срабатывает при обновлении пропертей компонента
        this.setState({
            lastName: nextProps.record.lastName
        })
    }

    onLastNameChange(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onLastNameBlur(e) {
        this.props.onLastNameBlur(this.state.lastName);
    }

    showUserDetails(e) {
        e.preventDefault();
        hashHistory.push(`/user/${this.props.record.id}`);
    }

    render() {
        let {record} = this.props;
        let {lastName} = this.state;
        return (
            <tr>
                <th onClick={this.showUserDetails}><a href="#">{record.id}</a></th>
                <td>{record.firstName}</td>
                <td>
                    <input type="text" value={lastName}
                           onChange={this.onLastNameChange}
                           onBlur={this.onLastNameBlur} // будем передавать значение наверх только по потере фокуса
                    />
                </td>
                <td>
                    <input type="checkbox" checked={record.active}
                           onChange={this.props.toggleActive}/>
                </td>
            </tr>
        );
    }
}

// дефолтные пропсы отобразятся при осутствии оных
GridRow.defaultProps = {
    record: {firstName: "N/A", lastName: "N/A", active: false},
    lastName: ''
};

// валидатор на проверку типов переданных пропсов
GridRow.propTypes = {
    record: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
    })
};