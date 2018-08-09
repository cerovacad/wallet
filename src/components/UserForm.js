import React, { Component } from "react";
import { InputGroup, FormGroup, Button } from "@blueprintjs/core";

class UserForm extends Component {
    state = {
        email: "",
        password: ""
    };
    onInputEmail = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onInputPassword = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onCreateAccount = (e) => {
        console.log("upper btn clicked");
    };
    onLogin = (e) => {
        console.log("lower btn clicked");
    };

    render() {
        return (
            <div className="user-form">
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
                <div className="user-form__buttons">
                    <Button
                        fill
                        minimal
                        active
                        className="bp3-intent-primary vertical-buttons__upper"
                        text={(this.props.match.path === "/signup")
                            ? "Create account"
                            : "Login"
                        }
                        onClick={this.onCreateAccount}
                    />
                    <Button
                        fill
                        minimal
                        active
                        className="bp3--dark-text-color-muted"
                        text={(this.props.match.path === "/login")
                            ? "Create account"
                            : "Login"
                        }
                        onClick={this.onLogin}
                    />
                </div>
                {
                    (this.props.match.path === "/login")
                    && <div className="user-form__message">
                        <p>Forgot password?</p>
                    </div>
                }
            </div>
        );
    };
};

export default UserForm;
