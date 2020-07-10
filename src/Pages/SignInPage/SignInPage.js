import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import './SignInPage.css';

function SignIn(props) {

    const [signIn, setSignIn] = useState([]);
    const [loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
        //.get(`https://q6to3w78jj.execute-api.eu-west-1.amazonaws.com/dev/tasks?user_id=${Cookies.get("user_id")}`)
        .get(`https://uuwrezvfy7.execute-api.eu-west-2.amazonaws.com/dev/user-registration/users?email=${userName}&password=${password}`)
        .then(response => {
            // request is successful, run this
            console.log(response.data);
            setSignIn(response.data.users);
            setLoading(false);
          })
        .catch(
          (error) => {
            //request is given an error, run this
            console.log('Error Signing In', error);
            setLoading(false);
          });
      }, []);

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

        {console.log("userName " + userName)}
        {console.log("password " + password)}
        {console.log("checked " + checked)}
        {console.log("signIn " + signIn)}
        {console.log("props " + props)}


    </>

    );

}

export default SignIn;
