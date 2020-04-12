import React from "react";
import { Router, Route, Switch } from 'react-router-dom';

import history from "./history";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Login from "./views/Login/Login";

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </Router>
        );
    }
}