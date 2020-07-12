import React from 'react';
import Logo from '../../../src/Images/logo-round_image-text-under.svg';
import MktgImage1 from '../../Images/1479225-556x370.jpg';
import MktgImage2 from '../../Images/1471493-556x370.jpg';
import './HomePage.css';

import { Image, Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
    
    return (
        <>  
            <div className="main-page">
            <Image className="logo-styling" alt="AppiMeals Logo" src={Logo} />

            <p>
                Create Meals with AppiMeals <br />
                    Cater towards your day and tastebuds
                </p>

            <p>&nbsp;</p>

            <Container>
                <Row>
                    <Col sm={4}>
                        <Image alt="Dutch Oven Paella" src={MktgImage1} fluid />
                    </Col>
                    <Col sm={8}>
                        Text about what the app can do. <br />
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
                        Text about what the app can do. <br />
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                    Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                </Col>
                    <Col sm={4}>
                        <Image alt="Honey-Glazed Citrus-Roasted Carrots" src={MktgImage2} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
};

export default HomePage;
