/*
ToDo:

1.  Add "Sign in With..." buttons
2.  Implement OAUTH in Facebook/Twitter/Google or decide
        to leave these as placeholders
        === https://www.codeproject.com/Articles/5258733/Login-With-Google-Using-ReactJS

3.  Investigate strange warning from clicking 'Remember Me' even though it prints in console 
    expected.

*/

import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function SignIn(props) {

    const [userName, setUserName] = useState("");
    const handleUserNameChange = e => {
        setUserName(e.target.value);
    }

    const [password, setPassword] = useState("");
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const[checked, setChecked] = useState(false);
    const handleClick = () => setChecked(!checked);

    const handleSubmit = e => {
        e.preventDefault();
        props.SignIn(userName, password, checked);
    }

    return (
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
                        <Form.Control 
                            type="email" 
                            placeholder="Email Address" 
                            onChange = {handleUserNameChange}
                            value={userName} 
                        />

                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            onChange = {handlePasswordChange}
                            value={password} 
                        />

                        <Form.Check 
                            type="checkbox" 
                            label="Remember Me" 
                            onClick = {handleClick}
                            checked={checked} 
                        />

                        <Link to="/forgot-password">Forgot Your Password?</Link>

                        <br/>

                        <Button 
                            variant="primary" 
                            type="submit"
                            onClick = {handleSubmit}
                        >
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

}

export default SignIn;
