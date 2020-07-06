/* ToDo

Link search box to Spoonacular API

*/

import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Logo from '../../Images/logo5-200x200.png';
import { Link } from 'react-router-dom';




 const NavBar = () => {
    return (
    <>
    <header>
        <Navbar bg="dark" variant="dark">
            <Link to="/">
                <img
                    src={Logo}
                    width="50px"
                    height="50px"
                    className="d-inline-block align-top"
                    alt="AppiMeals Logo"
                />
            </Link>

            <Nav className="mr-auto">
                <Nav.Link href="/SignIn">Sign In</Nav.Link>
            </Nav>
        </Navbar>
    </header>
    </>
    )
 }

export default NavBar; 