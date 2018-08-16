import React, { Component } from 'react';
import UserForm from '../components/UserForm';
import { loginUser } from '../firebase';

class Login extends Component {
    state = {  }

    loginHandler = (e,p) => {
        console.log('FIREBASE')
        loginUser(e,p)
    }

    render() {
        return (
            <div>
                <UserForm loginHandler={this.loginHandler} match={this.props.match}/>
            </div>
        );
    }
}

export default Login;