import React from "react";
import {render} from "react-dom";
import {hashHistory, Link, Route, Router} from "react-router";
import {UserDetails} from "./user/UserDetails";
import Table from "./table/Table";
import {NativeReactPage} from "./native/NativeReactPage";
import {Provider} from "react-redux";
import configureStore from "./store";


class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Awesome app</h1>
                <ul role="nav">
                    <li><Link to="/table">Table</Link></li>
                    <li><Link to="/user/1">UserDetails</Link></li>
                    <li><Link to="/native">NativeReactPage</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

/* подключим Redux Store
 приложение на Redux должно быть обёрнуто в Redux Provider, чтобы Redux
 управлял child-ами. */
render(
    <Provider store={configureStore()}>
        {/*  hashHistory - формирование URL с решеткой,
         browserHistory- формирует чистые URL, но нужно настроить сервер чтобы он отдавал одну и туже страницу на все URL */}
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="table" component={Table}/>
                <Route path="user" component={UserDetails}>
                    <Route path="/user/:id" component={UserDetails}/>
                </Route>
                <Route path="native" component={NativeReactPage}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'));
