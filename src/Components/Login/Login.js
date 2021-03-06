import React, { useState } from 'react';
import  { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, FormGroup, FormControl, FormLabel, Form} from "react-bootstrap";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [printError, setPrintError] = useState("");
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  // Display data that gets submitted here
  function handleSubmit(event) {
    event.preventDefault();
      axios
          .get(`https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/users`,
          {
              params: {
                  email: email,
                  password: password
              }
          })
          .then(response => {
                // Check the response and if the response is undefined, throw an error
                let responseTest = response.data.email["0"]; 
                if (responseTest === undefined) {
                  // Throw Error
                  setPrintError("Email or Password may be incorrect. Please try again.");
                }
                else{
                  setPrintError("");
                  sessionStorage.setItem('AppiMealsAuthUser', JSON.stringify(response.data.email["0"]));
                  history.push("/MyMealsHub");


                }
              })
          .catch(
              (error) => {
                  console.log('Error retrieving user', error);
              })
    }

  return (
    <>
      <Form onSubmit={handleSubmit} className="login form-container">
        <h1 className="form-header">Sign in</h1>
          {
            printError ? <div className="alert alert-danger" role="alert">{printError}</div> : null
          }
          <FormGroup className="form-element" controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="form-element" scontrolId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>

          <Button
            disabled={!validateForm()}
            type="submit"
            onClick={handleSubmit}>
            Let's Get Cooking!
            </Button>

            <p>Forgot password? <Link to="">Reset password</Link></p>
            <p>No account? <Link to="/SignUp">Create an account</Link></p>
      </Form>
    </>
  );
}
