// @flow

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component, useContext } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { type } from "os";
import { Container, Navbar, Row, Nav, NavDropdown } from "react-bootstrap";
import type { UserContextType } from "../app/App";
import { UserContext } from "../app/App";

type Props = {

}

export default function NavBar(props: Props): React$Element<any> {
    const userContext: UserContextType = useContext(UserContext)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Serwis samochodowy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        
                    </Nav>
                    {!userContext.userData?.user.confirmed ? (
                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">
                                Register
                            </Nav.Link>
                        </Nav>
                    ) : (
                        <Nav>
                            <Nav.Link onClick={()=>{
                                localStorage.clear()
                                userContext.setUserData()
                            }}>Exit</Nav.Link>
                        </Nav>
                    )}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}