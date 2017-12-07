import React from "react";
import {render} from "react-dom";
import {GridComponent} from "./GridComponent.js";
import {SearchInput} from "./SearchInput.js";


class App extends React.Component {

    render() {
        return (
            <div>
                <div>Hi, I'm div</div>
            </div>
        )
    }
}

const dataSource = [
    {firstName: "John", lastName: "Doe", active: false},
    {firstName: "Mary", lastName: "Moe", active: false},
    {firstName: "Peter", lastName: "Noname", active: true}
];

render(
    <div>
        <SearchInput></SearchInput>
        <GridComponent records={dataSource}></GridComponent>
    </div>,
    document.getElementById('app')
);
