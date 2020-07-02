/*
ToDo:

1.  Add "Sign in With..." buttons
2.  Implement OAUTH in Facebook/Twitter/Google or decide
        to leave these as placeholders

3.  Add Event Handling

*/

import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const LoginPage = () => (
    <>
        <Container>
            <Row>
                <Col>
                    <h2>Sign In</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Email Address" />

                        <Form.Control type="password" placeholder="Password" />

                        <Form.Check type="checkbox" label="Remember Me" />

                        <Link to="/forgot-password">Forgot Your Password?</Link>

                        <br/>

                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                    </Form.Group>

                </Form>
                </Col>
            </Row>
        </Container>

        <p>&nbsp;</p>

        <Container>
            <Row>

                <Col>
                    -- OR --
                </Col>

            </Row>
            <Row>
                <Col>
                    Sign in with...
                </Col>
            </Row>
            <Row>
                <Col>
                    Facebook
                </Col>
                <Col>
                    Twitter
                </Col>
                <Col>
                    Google
                </Col>
            </Row>
        </Container>

    </>
);

export default LoginPage;