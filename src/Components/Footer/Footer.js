import React from 'react';
import Logo from '../../Images/logo-round_text.svg';
import './Footer.css';

import { Image, Row, Col, ListGroup } from 'react-bootstrap';

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
                </Row>
        </footer>
        </div>
    </>
);

export default Footer;
