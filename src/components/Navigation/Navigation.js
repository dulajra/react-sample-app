import React from "react";
import {Button, Nav, Navbar} from "react-bootstrap";

export default class Navigation extends React.Component{
    render() {
        return (
            <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Home</a>
                        <a className="nav-item nav-link" href="/products">Products</a>
                        <a className="nav-item nav-link" href="/login">Pricing</a>
                    </div>
                </div>
            </Nav>
        );
    }
}