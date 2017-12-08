require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import {connect} from "react-redux";
import {GridRow} from "./GridRow";


class Grid extends React.Component {

    constructor(props) {
        super(props);
    }

    toggleActive(index) {
        // dispatch это специальная функция из редух для диспатча изменений к стору
        const {records, dispatch} = this.props;
        dispatch({
            type: 'TABLE_RECORD_TOGGLE_ACTIVE',
            value: index
        });
    }

    onLastNameBlur(index, lastName) {
        const {dispatch} = this.props;
        dispatch({
            type: 'TABLE_RECORD_LAST_NAME_CHANGE',
            value: {index, lastName}
        });
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

export default connect((state) => {
    return {}
})(Grid)