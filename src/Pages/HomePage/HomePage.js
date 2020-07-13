import React from 'react';
import Logo from '../../../src/Images/logo-round_image-text-under.svg';
import MktgImage1 from '../../Images/food-plate1.jpg';
import MktgImage2 from '../../Images/food-plate3.jpg';
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
                        <p>
                            Need to create delicious healthy meals but not sure where to start? 
                            Looking to get organised before you next trip to the supermarket? 
                        </p>

                        <p>
                            appiMeals is the app for you. 
                        </p>

                        <p>
                            With built a built-in meals hub, you can easily browse through hundreds of recipes and find the ones that work for you. 
                        </p>

                        <p>
                            With the intuitive ‘Meal Shop’, you can select meals for each day of the week and create a personalised 
                            shopping list. We’ll even let you know which supermarket will provide the best value for money that week.
                        </p>
                    </Col>
                </Row>
                <Row>
                <Col sm={8}>
                        <p>
                            Using the pre-set diet styles you can tailor the recipes to meet your preferences and the needs of your 
                            family. With the nutritional information readily available, you’ll be cooking up new healthy dishes in no time.
                        </p>

                        <p>
                            Let’s get cooking!
                        </p>
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
