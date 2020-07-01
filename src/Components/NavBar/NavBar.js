import React from 'react';
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';


 const NavBar = () => {
    return (
    <>
    <header>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/sign-in">Sign In</Nav.Link>
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