import React, { Component } from 'react';
import UserForm from '../components/UserForm';
import { loginUser } from '../firebase';
import { connect } from "react-redux";
import { loginAsync } from '../actions/authActions';

class Login extends Component {
    loginHandler = (e, p) => {
        loginUser(e, p)
            .then(data => this.props.startLogin(data))
            .then(() => this.props.history.push("/"))
            .catch(e => console.log(e.message))
    }

    render() {
        return (
            <div>
                <UserForm loginHandler={this.loginHandler} match={this.props.match} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startLogin: data => dispatch(loginAsync(data))
})

export default connect(null, mapDispatchToProps)(Login);