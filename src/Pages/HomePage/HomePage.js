/*
ToDo:
1. Improve marketing text

*/

import React from 'react';
import Logo from '../../Images/logo5-200x200.png';
import MktgImage1 from '../../Images/1479225-556x370.jpg';
import MktgImage2 from '../../Images/1471493-556x370.jpg';
import './HomePage.css';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

const HomePage = () => (
    <>
        <Container>
            <Row>
                <Col>
                    <Image alt="AppiMeals Logo" src={Logo}  /> 
                </Col>
            </Row>
            <Row>
                <Col>
                    Create Meals with AppiMeals <br/>
                    Cater towards your day and tastebuds
                </Col>
            </Row>
        </Container>

        <p>&nbsp;</p>

        <Container>
            <Row>
                <Col>
                    <Link to="/SignIn">
                        <Button renderAs="button" 
                            variant="primary" 
                            size="lg" 
                        >
                            <span>
                                Sign In
                            </span>
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    &nbsp;
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/SignUp">
                        <Button renderAs="button" 
                            variant="primary" 
                            size="lg" 
                        >
                            <span>
                                Register
                            </span>
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>

        <p>&nbsp;</p>

        <Container>
            <Row>
                <Col sm={4}>
                    <Image alt="Dutch Oven Paella" src={MktgImage1} fluid />
                </Col>
                <Col sm={8}>
                    Text about what the app can do. <br/>
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text 
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                </Col>
            </Row>
            <Row>
                <Col>
                    &nbsp;
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    Text about what the app can do. <br/>
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text 
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                </Col>
                <Col sm={4}>
                    <Image alt="Honey-Glazed Citrus-Roasted Carrots" src={MktgImage2} fluid />
                </Col>
            </Row>
        </Container>

    </>
);

export default HomePage;
