//@flow


import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";


export default function Register(): React$Element<"form">{
    

    return (
        <Form>
            <h3>Sign Up</h3>
            <FormGroup className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"/>
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"/>
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"/>
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password"/>
            </FormGroup>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}