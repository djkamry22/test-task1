import React from 'react';
import {Switch, Route, NavLink} from "react-router-dom";
import {Navbar, Nav, Container} from "react-bootstrap";
import Projects from "../Projects/Projects";
import Team from "../Team/Team";
import Home from "../Home/Home";
import './header.css'



function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="/">Kama-bullet</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto custom-links">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/projects'>Projects</NavLink>
                        <NavLink to='/team'>Team</NavLink>
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
