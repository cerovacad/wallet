import React, { Component } from 'react';
import UserForm from '../components/UserForm';

class SignUp extends Component {
    state = {  }
    render() {
        return (
            <div>
                <UserForm match={this.props.match}/>
            </div>
        );
    }
}

export default SignUp;