import React from "react";
import {render} from "react-dom";

class App extends React.Component {

    render() {
        return (
            <div>
                <div>Hi, I'm div</div>
                <h1>Hi, I'm header inside div</h1>
                <ul>
                    <li>Hi, I'm list item inside list inside div</li>
                    <li>Hi, I'm list item inside list inside div</li>
                </ul>
            </div>
        )
    }
}

render(
    <App></App>,
    document.getElementById('app')
);
