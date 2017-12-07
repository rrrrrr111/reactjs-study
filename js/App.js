import React from "react";
import {render} from "react-dom";
import {GridComponent} from "./GridComponent.js";


class App extends React.Component {

    render() {
        return (
            <div>
                <div>Hi, I'm div</div>
            </div>
        )
    }
}

render(
    <GridComponent></GridComponent>,
    document.getElementById('app')
);
