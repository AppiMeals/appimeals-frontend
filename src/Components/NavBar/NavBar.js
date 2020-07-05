/* ToDo

Link search box to Spoonacular API

*/

import React from 'react';
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';
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
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="AppiMeals Logo"
                />
            </Link>

            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/SignIn">Sign In</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Recipe" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
    </header>
    </>
    )
 }

export default NavBar; 