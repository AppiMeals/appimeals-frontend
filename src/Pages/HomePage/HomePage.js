import React from 'react';
import Logo from '../Images/logo5-200x200.png';
import MktgImage1 from '../Images/1479225-556x370.jpg';
import MktgImage2 from '../Images/1471493-556x370.jpg';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';




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
                    <Button variant="primary" size="lg" block>Login</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    &nbsp;
                </Col>
            </Row>
            <Row>
                <Col>
                <Button variant="primary" size="lg" block>Sign Up</Button>
                </Col>
            </Row>
        </Container>

        <p>&nbsp;</p>

        <Container>
            <Row>
                <Col>
                    <Image alt="Dutch Oven Paella" src={MktgImage1}  />
                </Col>
                <Col>
                    Text about what the app can do. <br/>
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text 
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col>
                    Text about what the app can do. <br/>
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text 
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                </Col>
                <Col>
                <Image alt="Honey-Glazed Citrus-Roasted Carrots" src={MktgImage2}  />
                </Col>
            </Row>
        </Container>



        {/* <Footer /> */}
    </>
);

export default HomePage;