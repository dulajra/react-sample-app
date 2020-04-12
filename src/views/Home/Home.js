import React from "react";
import {Button} from "react-bootstrap";

import history from "../../history";

export default class Home extends React.Component{

    handleLoginClick = () => {
      history.push('/login');
    };

    render() {
        return (
            <div className="card text-center">
                <div className="card-header">
                    Welcome to My Site
                </div>
                <div className="card-body">
                    <h5 className="card-title">Login to explore more</h5>
                    <p className="card-text">Please login to continue</p>
                    <Button className="btn btn-primary" onClick={this.handleLoginClick}>Login</Button>
                </div>
                <div className="card-footer text-muted">
                    All Rights Reserved
                </div>
            </div>
        );
    }
}