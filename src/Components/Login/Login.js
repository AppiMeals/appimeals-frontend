import React, { useState } from 'react';
import  { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
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
      <div className="container">
        <h1>&nbsp;</h1>
        <form onSubmit={handleSubmit} className="Login">
          

            {
              printError ? <div className="alert alert-danger" role="alert">{printError}</div> : null
            }
            <FormGroup controlId="email">
              <FormLabel>Email</FormLabel>
              <FormControl  
                autoFocus
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>

            <FormGroup controlId="password">
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

      </form>
      </div>




  );
}
