import React, { useState } from 'react';
import Cookies from 'js-cookie';
import  { useHistory } from 'react-router-dom';
import axios from 'axios';
import "./Registration.css";

import { Container, Row, Col, Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


function SubmitRegistration() {
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");
    const [confirmPassword, setConfirmPassword] =  useState("");
    const history = useHistory();
    
    function validateForm() {
        let validation = false;
        let count = 0;
        // checking for fields entered
        if ((email.length > 0) && (password.length > 0) && (firstName.length > 0) && (surname.length > 0) && (confirmPassword.length > 0)) {
            count += 1;
        }
        // checking for passwords matching
        if (password === confirmPassword){
            count += 1;
        }
        if (count === 2){
            validation = true;
        }
        return validation;
    }

    function handleSubmit(event) {
        event.preventDefault();

        //Create JSON object
        const newUser = {
            "firstName": firstName,
            "surname": surname,
            "email": email,
            "password": password
        }
        console.log(newUser);

        axios
        .post(`https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/users`, newUser)
        .then(response => {
              // Test response, if all is okay, push to login screen or else
              // just drop the cookie and go to select meal preferences (MyMealChoices)
              //console.log(response);
              Cookies.set('appimeals', 'Authenticated');
              history.push("/MyMealChoices");
            })
        .catch(
            (error) => {
                console.log('Error Registering New Member', error);
            })
    }

return(
    <>
    <h1>&nbsp;</h1>
    <form onSubmit={handleSubmit} className="Register">
    
    <Container>
        <Row>
            <Col className="col-6">
            <FormGroup controlId="firstName">
                <FormLabel>First Name</FormLabel>
                <FormControl
                    autoFocus
                    className = "textField"
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                </FormGroup>
            </Col>
            <Col className="col-6">
            <FormGroup controlId="surname">
                <FormLabel>Surname</FormLabel>
                <FormControl
                    autoFocus
                    type="text"
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                />
            </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col className="col-12">
            <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <FormControl
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col className="col-6">
            <FormGroup controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
            </FormGroup>
            </Col>

            <Col className="col-6">
            <FormGroup controlId="confirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    type="password"
                />
            </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col className="col-12">
            <Button 
                disabled={!validateForm()} 
                type="submit"
                onClick={handleSubmit}>
                Sign Up
            </Button>
            </Col>
        </Row>
    </Container>
    </form>
    {/* {console.log("firstName " + firstName)}
    {console.log("surname " + surname)}
    {console.log("email " + email)}
    {console.log("password " + password)}
    {console.log("confirmPassword " + confirmPassword)} */}


    </>
    );
}
export default SubmitRegistration;
