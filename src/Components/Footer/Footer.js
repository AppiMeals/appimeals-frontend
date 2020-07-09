/*
ToDo:

1. Landing pages for Contact Us, About Us & FAQ, and Blog
2.  Link these to those landing pages ^^^

3.  Set up FB and Twitter???
4.  Link these to those ??

*/

import React from 'react';
import Logo from '../../Images/logo-round_text.svg';
import './Footer.css';

import { Image, Container, Row, Col, ListGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';


const Footer = () => (
    <>  
     <div>
        <footer className="footer">
                <Row>
                    <ListGroup className="footer-elements" horizontal>
                        <Image className="appiMealsLogo" alt="AppiMeals Logo" src={Logo} />

                        <Link className="contact-page" to="">Contact Us</Link>
                        <Link className="about-page" to="">About Us &amp; FAQ</Link>
                        <Link className="blog-page" to="">Blog</Link>
                    </ListGroup>
                </Row>

                <Row>
                    <Col className="copyright-text">
                        Copyright 2020 &copy; APPIMEALS
                    </Col>
                </Row>gis
        </footer>
        </div>
    </>
);

export default Footer;
