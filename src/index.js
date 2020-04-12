import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes";
import Navigation from "./components/Navigation/Navigation";

ReactDOM.render(
    <Router>
        <Navigation />
        <div className="app">
            <Routes/>
        </div>
    </Router>,
    document.getElementById("root")
);

