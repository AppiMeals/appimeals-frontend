import React, { Component}  from 'react';

import "./Blog.css";
import { Container, Row, Col } from 'react-bootstrap';

class Blog extends Component {
    
    render(){

        return (
            <>


                <h1>Blog</h1>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h2>
                                Up-Coming Features! (aka Product Roadmap)
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4}>
                            Date:
                        </Col>
                        <Col sm={8}>
                            9th July, 2020
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4}>
                            By:
                        </Col> 
                        <Col sm={8}>
                            <a href="/">appiMeal Team</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p>We are pleased to present to you our Product Map.  Our team has been working very hard for the past couple of weeks.  
                            While wrangling the in’s and out’s of React, we each have learned so much and look forward to adding these features in future:</p>
                            <ul>
                                <li>
                                    In the near future, look for a profile section where you can include more information about allergies or food 
                                    intolerances so that recipes returned exclude those ingredients.
                                </li>
                                <li>
                                    We hope to soon announce the grocery stores we have partnered with to automate your appiMeals experience even 
                                    further, by allowing you to send your shopping card directly to the grocery store of your choice.  Stay tuned 
                                    for this development that we are all super excited about!
                                </li>
                                <li>
                                    Process Tutorial Videos – Tutorials hosted by appiMeal founders, 
                                    guiding you along your journey.</li>
                                <li>
                                    Diet Goals Feature – Based on your past meal preferences, appiMeal 
                                    will suggest the right diet for you and you will be able to track 
                                    your progress.
                                </li>
                                <li>
                                    4-Week Meal Selection – Look forward to being able to do your meal 
                                    planning as far as a month in advance!
                                </li>
                                <li>
                                    In a few weeks, we’ll also be enhancing our app to accept your mobile so that you can receive SMS updates.
                                </li>
                                <li>
                                    We are also interested in including some functionality that allows our app to interact with Siri, Alexa, 
                                    and other Smart Devices.  If you are interested in joining our focus group for exploring these options, 
                                    please let us know.  We can offer you a discount to future services in return for your time.
                                </li>
                            </ul>
                            <p>
                                We are ever so grateful to our growing appiMeals family and look forward to announcing these features in the near future.  
                                As always, you can <a href="/ContactUs">contact us</a> if you have any questions or need some customer support.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Blog; 