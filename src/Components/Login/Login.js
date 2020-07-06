import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { Auth } from "aws-amplify";
//import { useAppContext } from "../../libs/contextLib";

export default function Login() {
  //const { userHasAuthenticated } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
    // async function handleSubmit(event) {
    //     event.preventDefault();
    
    //     try {
    //     await Auth.signIn(email, password);
    //     userHasAuthenticated(true);
    //     } catch (e) {
    //     alert(e.message);
    //     }
    // }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
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
        <Button block size="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}