import React from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core'
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

const Nav = ({ logout }) => {
    const onUserLogout = () => {
        logout();
    };
    return (
        <div className='mb'>
            <Navbar className='blue'>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading className="logo">GROM</Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Button
                        className="bp3-minimal off-white"
                        icon="log-in"
                        text="Logout"
                        onClick={onUserLogout}
                    />
                </Navbar.Group>
            </Navbar>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Nav);