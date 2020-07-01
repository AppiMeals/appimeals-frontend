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
                <Col>
                    &nbsp;
                </Col>
                <Col>
                    &nbsp;
                </Col>
            </Row>
            <Row>
                <Col>
                    &nbsp;
                </Col>
                <Col>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLink">
                        <Link to="/forgot-password">Forgot Your Password?</Link>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
                </Col>
                <Col>
                    &nbsp;
                </Col>
            </Row>
        </Container>

        <p>&nbsp;</p>

        <Container>
            <Row>
                <Col>
                    &nbsp;
                </Col>
                <Col>
                    -- OR --
                </Col>
                <Col>
                    &nbsp;
                </Col>
            </Row>
            <Row>
                <Col>
                    Sign in with...
                </Col>
                <Col>
                    &nbsp;
                </Col>
                <Col>
                    &nbsp;
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