import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import GatorLogo from './GatorLogo.png'
import {Row, Col, Container, Button} from 'reactstrap';
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div className="Login">
      <Container>
    <Row className="justify-content-md-center">
        <Col md="auto">
        <img className="my_image" src={GatorLogo} />  
        </Col>
    </Row>
</Container>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block size="large" block style={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50'}} disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
    </div>
    
  );
}