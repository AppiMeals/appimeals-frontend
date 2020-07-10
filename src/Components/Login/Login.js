import React, { useState } from 'react';
import  { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Cookies from 'js-cookie';
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [printError, setPrintError] = useState("");
  const history = useHistory();

  if (Cookies.get('appimeals') === "Authenticated"){
    Cookies.remove('appimeals');
    console.log("Cookie got removed");
    history.push("/HomePage");
  }

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
                  // drop cookie and move on to hub
                  Cookies.set('appimeals', 'Authenticated');
                  history.push("/MyMealsHub");
                }
              })
          .catch(
              (error) => {
                  console.log('Error retrieving user', error);
              })
    }

    return (
      <div className="Login">
    
      <form onSubmit={handleSubmit}>
        {printError}
        <FormGroup controlId="email" size="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" size="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button 
          block size="large" 
          disabled={!validateForm()} 
          type="submit"
          onClick={handleSubmit}>
          Login
        </Button>
        
      </form>
    </div>
  );
}