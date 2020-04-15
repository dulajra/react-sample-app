import React from "react";
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    validateForm = () => {
        const {username, password} = this.state;
        return username.length > 0 && password.length > 0;
    };

    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({ [id]: value });
    };

    handleSubmit = (event) => {
        this.callLogin(this.state.username, this.state.password);
        event.preventDefault();
    };

    callLogin = (username, password) => {
        window.fetch('http://localhost:8080/login', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        }).then((response) => {
            response.json().then((data) => {
                localStorage.setItem('token', data.token);
            });
        }).catch((error) => {
            localStorage.removeItem('token');
        });
    };

    render() {
        return (
            <div className="col-4 offset-4" style={{'margin-top': '250px'}}>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}