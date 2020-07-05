/*
ToDo:

1.  Add "Sign in With..." buttons
2.  Implement OAUTH in Facebook/Twitter/Google or decide
        to leave these as placeholders
        === https://www.codeproject.com/Articles/5258733/Login-With-Google-Using-ReactJS

*/

import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


import './SignInPage.css';

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
    <p>&nbsp;</p>
        <Container>
            <Form>
            <Form.Group>
            <Row>
                <Col>
                    <h2>Sign In</h2>
                </Col>
            </Row>
            <Row>
                <Col>
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
                        onChange = {handleClick}
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
                </Col>
            </Row>
            <p>&nbsp;</p>
            <Row>
                <Col>
                    <button className="btn-facebook">
                        <i className="fa fa-facebook"></i>
                         | Sign In with Facebook
                    </button>

                </Col>
                <Col>
                    <button className="btn-twitter">
                        <i className="fa fa-twitter"></i>
                         | Sign In with Twitter
                    </button>
                </Col>
                <Col>
                    <button className="btn-google">
                        <i className="fa fa-google"></i>
                         | Sign In with Google
                    </button>
                </Col>
            </Row>
            </Form.Group>
            </Form>
        </Container>


    </>

    );

}

export default SignIn;
