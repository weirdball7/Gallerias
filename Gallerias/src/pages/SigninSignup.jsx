// src/pages/SigninSignup.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../SigninSignup.css';

function SigninSignup() {
  return (
    <div className="signin-container">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Form className="signin-form">
          <div className="form-container">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="signin-button w-100">
              Sign In
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default SigninSignup;
