import React, {useState} from "react";
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        callLogin();
        event.preventDefault();
    }

    function callLogin() {
        window.fetch('http://localhost:8080/', {
            mode: "cors"
        }).then((response) => {
            response.json().then((data) => {
                console.log(data);
            });
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className="col-4 offset-4" style={{ 'margin-top': '250px' }}>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}