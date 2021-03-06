import React from 'react';
import {Navbar, Nav, Button, Image} from 'react-bootstrap';
import Logo from '../../../src/Images/logo-round_image-text-next.svg';
import "../../../src/Components/NavBar/NavBar.css"
import { Component } from 'react';

const user = JSON.parse(sessionStorage.getItem('AppiMealsAuthUser'));
const user1 = user;
const user2 = user;

class NavBar extends Component {
    
    render(){

        return (
            <>
            <header>
                <Navbar className="navbar" collapseOnSelect bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <Image  className="header-img" src={Logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    {
                        user2? <Nav className="mr-auto navbar nav">
                        <Nav.Link href="/BrowseRecipes">Recipes</Nav.Link>
                        <Nav.Link href="/MyMealsHub">Hub</Nav.Link>
                        <Nav.Link href="/MyMealChoices">Meal Choices</Nav.Link>
                    </Nav>  :  null
                    }

                    <Nav className="ml-auto navbar nav">

                        {
                            user? <Button variant="primary" className="signin-btn" href="/SignOut">Sign Out</Button> : <Button variant="primary" className="signin-btn" href="/SignIn">Sign In</Button> 
                        }

                        {
                            user1? null : <Button variant="secondary" className="signup-btn" href="/SignUp">Sign Up</Button>
                        }

                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            </>
        )
    }
}

export default NavBar; 