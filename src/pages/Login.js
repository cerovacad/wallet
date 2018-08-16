import React, { Component } from 'react';
import UserForm from '../components/UserForm';

class Login extends Component {
    state = {  }
    render() {
        return (
            <div>
                <UserForm match={this.props.match}/>
            </div>
        );
    }
}

export default Login;