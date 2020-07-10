import React, { useState } from 'react';
import './Registration.css';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function SubmitRegistration(props) {

    const [firstName, setFirstName] = useState("");
    const handleFirstNameChange = e => {
        setFirstName(e.target.value);
    }

    const [surname, setSurname] = useState("");
    const handleSurnameChange = e => {
        setSurname(e.target.value);
    }

    const [email, setEmail] = useState("");
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const [password, setPassword] =  useState("");
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.newRegistration(firstName, surname, email);
    }

return(
    <>

        <Container>
            <Row>
                <Col>
                    <h2>Sign Up!</h2> <br/>
                    <h2>Let's Create AppiMeals...</h2>
                </Col>
            </Row>
        </Container>

        <Form>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Control 
                                type="text" 
                                placeholder="First Name" 
                                onChange = {handleFirstNameChange}
                                value={firstName}    
                            /> 
                        </Col> 
                        <Col>
                            <Form.Control 
                                type="text" 
                                placeholder="Surname" 
                                onChange = {handleSurnameChange}
                                value={surname}   
                            />
                        </Col>
                    </Form.Row>

                        <Form.Control 
                            type="email" 
                            placeholder="Email Address (your Login)" 
                            onChange = {handleEmailChange}
                            value={email}   
                        /> 

                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            onChange = {handlePasswordChange}
                            value={password}   
                        /> 
                    <p>&nbsp;</p>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick = {handleSubmit} 
                    >
                        Sign Up
                    </Button>
            </Form.Group>
        </Form>
    </>
    );
}
export default SubmitRegistration;
