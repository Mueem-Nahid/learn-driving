import React from 'react';
import { Form } from 'react-bootstrap';

const Login = () => {
    return (
        <Form className="container col-md-6 my-5 p-5 fw-normal">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Not a member yet!</Form.Label>
            <a href="#!" className="p-2">SignUp</a>
        </Form.Group>
        <button type="submit" class="btn btn-primary">Submit</button>
        </Form>
    );
};

export default Login;