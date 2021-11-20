//@flow
import type { UserContextType, UserData } from "../app/App";
import { UserContext } from "../app/App";

import axios from "axios";
import React, { Component, useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Login(): React$Element<any> {
    const [email, setEmail] = useState < string > ("vlad@gmail.com")
    const [pass, setPass] = useState < string > ("ABCD@1234")

    const userContext: UserContextType = useContext(UserContext)

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => { return setEmail(e.target.value) }} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={pass} onChange={e => { return setPass(e.target.value) }}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={() => {
                console.log({identifier: email, pass: pass})
                axios.post("http://localhost:1337/auth/local", {identifier: email, password: pass})
                .then(response=>{
                    const userData: UserData = response.data

                    localStorage.setItem('UserData', JSON.stringify(userData));
                    userContext.setUserData(userData)
                })
            }}>
                Submit
            </Button>
        </Form>
    );

}