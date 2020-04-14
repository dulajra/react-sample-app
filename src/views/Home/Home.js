import React from "react";

export default class Home extends React.Component {
    render() {
        return (
            <div className="card text-center">
                <div className="card-header">
                    Welcome to Sample React App
                </div>
                <div className="card-body">
                    <p className="card-text">This is the home page of the sample react app</p>
                </div>
                <div className="card-footer text-muted">
                    All Rights Reserved
                </div>
            </div>
        );
    }
}