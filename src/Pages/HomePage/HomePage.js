import React from 'react';
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
 import Logo from '../Images/logo5-200x200.png';
 import MktgImage1 from '../Images/1479225-556x370.jpg';
 import MktgImage2 from '../Images/1471493-556x370.jpg';

 import Image from 'react-bootstrap/Image';
 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import Button from 'react-bootstrap/Button';



// console.log(AppiMealLogo200x200);

const HomePage = () => (
    <>
        {/* <Header /> */}
        {/* Likely not for the landing page */}
        <h1>AppiMeals</h1>

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



        <table>
            <tbody>
                <tr>
                    <td>
                        <img alt="Dutch Oven Paella" src={MktgImage1}  />
                    </td>
                    <td>
                        Text about what the app can do. <br/>
                        Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text 
                        Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                        Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text 
                    </td>
                </tr>
                <tr>
                    <td>
                    Text about what the app can do. <br/>
                        Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text 
                        Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text
                        Marketing Information.... make up some text Marketing Information.... make up some text Marketing Information.... make up some text 
                    </td>
                    <td>
                        <img alt="Honey-Glazed Citrus-Roasted Carrots" src={MktgImage2} />
                    </td>
                </tr>
            </tbody>
        </table>

        {/* <Footer /> */}
    </>
);

export default HomePage;