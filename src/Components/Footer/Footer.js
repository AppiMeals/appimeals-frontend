import React from 'react';
import Logo from '../../Images/logo-round_text.svg';
import './Footer.css';

import { Image, Nav, ListGroup } from 'react-bootstrap';

const Footer = () => (
    <>
        <footer className="footer">

                <Image className="app-logo" src={Logo}/>

                <ListGroup className="footer-elements" horizontal>
                     <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                    <Nav.Link href="/FAQ">About Us &amp; FAQ</Nav.Link>
                    <Nav.Link href="/Blog">Blog</Nav.Link>
                </ListGroup>

                <p className="copyright-text">
                    Copyright 2020 &copy; APPIMEALS
                </p>

        </footer>
    </>
);

export default Footer;
