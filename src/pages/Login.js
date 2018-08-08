import React, { Component } from 'react';
import { InputGroup, FormGroup, Button } from "@blueprintjs/core";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.onInputEmail = this.onInputEmail.bind(this);
        this.onInputPassword = this.onInputPassword.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onCreateAccount = this.onCreateAccount.bind(this);
    };

    onInputEmail(e) {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onInputPassword(e) {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onCreateAccount(e) {
        console.log("Create account clicked");
    };
    onLogin(e) {
        console.log("Login clicked");
    };

    render() {
        return (
            <div className="signup">
                <FormGroup
                    label="Email"
                    labelFor="text-input"
                >
                    <InputGroup
                        id="text-input"
                        type="text"
                        value={this.state.email}
                        onChange={this.onInputEmail}
                    />
                </FormGroup>
                <FormGroup
                    label="Password"
                    labelFor="password-input"
                >
                    <InputGroup
                        id="password-input"
                        type="password"
                        value={this.state.password}
                        onChange={this.onInputPassword}
                    />
                </FormGroup>
                <div className="signup__btnWrapper">
                    <Button
                        fill
                        minimal
                        active
                        className="bp3-intent-primary signup__btnWrapper__btn"
                        text="Login"
                        onClick={this.onLogin}
                    />
                    <Button
                        fill
                        minimal
                        active
                        className="bp3--dark-text-color-muted"
                        text="Create account"
                        onClick={this.onCreateAccount}
                    />
                </div>
            </div>
        );
    };
};

export default Login;