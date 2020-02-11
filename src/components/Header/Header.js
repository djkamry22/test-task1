import React from 'react';
import {Switch, Route} from "react-router-dom";
import {Navbar, Nav, Container} from "react-bootstrap";
import Projects from "../Projects/Projects";
import Team from "../Team/Team";
import Home from "../Home/Home";



function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="/">Kama-bullet</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route path="/projects" component={Projects}/>
                <Route path="/team" component={Team}/>
                <Route path="/" exact component={Home}/>
            </Switch>
        </div>

    );

}

export default Header;
