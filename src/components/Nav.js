import React from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core'
import { withRouter } from "react-router-dom";

const Nav = (props) => (
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
                    onClick={()=>props.history.push("/login")}
                />
            </Navbar.Group>
        </Navbar>
    </div>
);

export default withRouter(Nav);