require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import {render} from "react-dom";
import {hashHistory} from 'react-router'
import PropTypes from "prop-types";


export class Grid extends React.Component {

    constructor(props) {
        super(props);
    }

    toggleActive(index) {
        const {records} = this.props;
        records[index].active = !records[index].active;
        this.props.onEditRecords(records);
    }

    onLastNameBlur(index, lastName) {
        const {records} = this.props;
        records[index].lastName = lastName;
        this.props.onEditRecords(records)
    }

    render() {
        const {records} = this.props;
        return (
            <div>
                {/*заюзаем классы из bootstrap*/}
                <table className="table table-striped table-bordered" style={{margin: '20px', width: '400px'}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Активный</th>
                    </tr>
                    </thead>
                    <tbody>
                    {   // динамично нарисуем список строк
                        records.map((record, index) => {
                            return (
                                // метод bind привяжет this и index к контексту, т е когда бы он не вызвался this
                                // будет ссылаться на GridComponent а index на переданный во время bind параметр
                                // index будет передаваться первым парамтером независимо от последующих вызовов этой функции
                                <GridRow record={record}
                                         key={index}
                                         toggleActive={this.toggleActive.bind(this, index)}
                                         onLastNameBlur={this.onLastNameBlur.bind(this, index)}
                                />
                            );
                        })}
                    </tbody>
                </table>
                {this.props.children}

                {/* React.cloneElement(..) нужно сделать если вы хотите передать пропертя не
                    уазывая провертя сверху самого чилдового элемента */}
                {/*{React.cloneElement(this.props.children, {records: this.props.records})}*/}
            </div>
        )
    }
}

class GridRow extends React.Component {
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

    showUserDetails(e){
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