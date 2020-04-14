import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Navigation from "./components/Navigation/Navigation";

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Navigation/>
          <div className='col-8 offset-2' style={{ 'margin-top': '5px' }}>
              <Router>
                  <Switch>
                      <PrivateRoute path='/' exact component={Home}/>
                      <PrivateRoute path='/products' component={Products}/>
                      <Route path='/login' component={Login}/>
                  </Switch>
              </Router>
          </div>
        </div>
    );
  }
}
