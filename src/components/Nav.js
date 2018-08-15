import React from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core'

const Nav = () => (
   <div className='mb'>
       <Navbar className='blue'>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading className="logo">GROM</Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <Button className="bp3-minimal off-white" icon="log-in" text="Logout" />
            </Navbar.Group>
        </Navbar>
   </div> 
);

export default Nav;