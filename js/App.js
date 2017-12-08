import React from "react";
import {render} from "react-dom";
import {hashHistory, Link, Route, Router} from "react-router";
import {UserDetails} from "./user/UserDetails.js";
import {Table} from "./table/Table.js";
import {NativeReactPage} from "./native/NativeReactPage.js";


class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Awesome app</h1>
                <ul role="nav">
                    <li><Link to="/table">Table</Link></li>
                    <li><Link to="/user">UserDetails</Link></li>
                    <li><Link to="/native">NativeReactPage</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

// hashHistory - формирование URL с решеткой,
// browserHistory- формирует чистые URL, но нужно настроить сервер чтобы он отдавал одну и туже страницу на все URL
render(<Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="table" component={Table}/>
            <Route path="user" component={UserDetails}/>
            <Route path="native" component={NativeReactPage}/>
        </Route>
    </Router>,
    document.getElementById('app'));
