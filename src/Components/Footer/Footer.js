import React from 'react';
import Logo from '../../Images/logo-round_text.svg';
import './Footer.css';

import { Image, ListGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Footer = () => (
    <>
        <footer className="footer">

                <Image className="app-logo" src={Logo}/>

                <ListGroup center className="footer-elements" horizontal>
                    <Link className="contact-page" to="">Contact Us</Link>
                    <Link className="about-page" to="">About Us &amp; FAQ</Link>
                    <Link className="blog-page" to="">Blog</Link>
                </ListGroup>

                <p className="copyright-text">
                    Copyright 2020 &copy; APPIMEALS
                </p>

        </footer>
    </>
);

export default Footer;
