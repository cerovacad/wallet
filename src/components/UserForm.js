import React, { Component } from "react";
import { InputGroup, FormGroup, Button } from "@blueprintjs/core";
import { Redirect } from 'react-router-dom';
import { resetPass } from "../firebase";

class UserForm extends Component {
    state = {
        redirect: null,
        showResetCtrl: null,
        checkMail: null,
        resetEmail: "",
        email: "",
        password: ""
    };
    onInputEmail = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onInputResetEmail = (e) => {
        const resetEmail = e.target.value;
        this.setState(() => ({ resetEmail }));
    };

    onInputPassword = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onCreateAccount = (e) => {
        this.setState({ redirect: true })
    };

    onLogin = (e) => {
        const { email, password } = this.state
        this.props.loginHandler(email, password)
    };

    onReset = () => {
        this.setState({ showResetCtrl: !this.state.showResetCtrl })
    }
    onSendResetMail = () => {
        if(this.state.resetEmail !=="") {
            resetPass(this.state.resetEmail)
            .then(
                this.setState({
                    checkMail: true,
                    showResetCtrl: false
                })
            ).catch((e) => {
                console.log(e)
            })
        }
        

    }

    render() {
        return (
            <div className="user-form">
                {this.state.redirect ? (<Redirect to='/signup' />) : ('')}

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
                        text={"Login"}
                        onClick={this.onLogin}
                    />
                    <Button
                        fill
                        minimal
                        active
                        className="bp3--dark-text-color-muted"
                        text={"Create account"}
                        onClick={this.onCreateAccount}
                    />
                </div>
                {
                    (this.props.match.path === "/login")
                    && <div className="user-form__message">
                        <p style={{ cursor: "pointer", textDecoration: "underline", color: "#B7D7EB" }} onClick={this.onReset}>Forgot password?</p>
                        {this.state.showResetCtrl ? (
                            <div>
                                <FormGroup
                                    // label="resetPassword"
                                    labelFor="resetPassword"
                                >
                                    <InputGroup
                                        id="resetPassword"
                                        type="email"
                                        value={this.state.resetEmail}
                                        onChange={this.onInputResetEmail}
                                    />
                                </FormGroup>
                                <Button
                                    fill
                                    minimal
                                    active
                                    className="bp3--dark-text-color-muted"
                                    text={"Send reset email"}
                                    onClick={this.onSendResetMail}
                                />
                            </div>
                        ) : ("")}
                        {this.state.checkMail && this.state.resetEmail ? (
                            <h1 className='resetMsg' >Check your email reset link has been set</h1>
                        ) : ("")}
                    </div>
                }
            </div>
        );
    };
};

export default UserForm;
