import React, { Component } from "react";
import { InputGroup, FormGroup, Button } from "@blueprintjs/core";
import { Redirect } from 'react-router-dom';

class UserForm extends Component {
    state = {
        redirect: null,
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
        console.log(this.state);
    };
    onLogin = (e) => {
        console.log(this.state);
        if(
            this.state.email === 'qwe' &&
            this.state.password === 'qwe'
        ){
            this.setState({ redirect: !this.state.redirect })
        }
    };

    render() {
        return (
            <div className="user-form">
                { this.state.redirect ? ( <Redirect to='/'/> ):( '' ) }
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
                        onClick={this.onLogin}
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
