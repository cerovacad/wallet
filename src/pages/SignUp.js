import React, { Component } from 'react';
import UserFormSignUp from '../components/UserFormSignUp';
import { connect } from 'react-redux'
import { signUpUser } from '../firebase';
import { signUpAsync } from '../actions/authActions';

class SignUp extends Component {

    signUpHandler = (e,p) => {
        signUpUser(e,p)
        .then(data => this.props.startSignUp(data))
        .then(() => this.props.history.push('/login'))
        .catch(e => console.log(e))
    }

    render() {
        return (
            <div>
                <UserFormSignUp signUpHandler={this.signUpHandler} match={this.props.match}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startSignUp: data => dispatch(signUpAsync(data))
})

export default connect(null, mapDispatchToProps)(SignUp);

// export default SignUp;