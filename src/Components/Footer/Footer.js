import React from 'react';
import Logo from '../../Images/logo5-200x200.png';
import FBLogo from '../../Images/iconfinder_icon-02_2515845.png';
import TwitterLogo from '../../Images/iconfinder_icon-03_2515844.png';
import './Footer.css';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Footer = () => (
    <>  
        <p>&nbsp;</p>

        <Container>
            <Row>
                <Col>
                    <Image className="appiMealsLogo" alt="AppiMeals Logo" src={Logo}  />
                </Col>
                <Col className="contact-buttons">
                    <Button>Contact Us</Button>
                    &nbsp;
                    <Button>About Us &amp; FAQ</Button>
                    &nbsp;
                    <Button>Blog</Button>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Image className="logo" alt="Facebook Logo" src={FBLogo} />

                    <Image className="logo" alt="Twitter Logo" src={TwitterLogo}  />
                </Col>
                <Col sm={8}>
                    &nbsp;
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col>
                    &copy; 2020 AppiMeals
                </Col>
            </Row>
        </Container>

    </>
);

export default Footer;