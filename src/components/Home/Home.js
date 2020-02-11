import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import './home.css'


function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Hello, world!</h1>
                    <p>
                        This project was made at the request of the company,
                        let's call them "Company Z", to pass the test task!<br/>
                        I’ll leave my links here where you can contact me.
                        Good luck , dear!
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary">
                        <a href="https://www.facebook.com/djkamry" target="_blank">Facebook</a>
                    </Button>{' '}
                    <Button variant="info">
                        <a href="https://www.linkedin.com/in/djkamry/" target="_blank">LinkedIn</a>
                    </Button>{' '}
                    <Button variant="dark">
                        <a href="https://github.com/djkamry22" target="_blank">Github</a>
                    </Button>{' '}
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}}>
                <Col>
                    <img style={{width: '60%'}} src="img/bg1.jpg"/>
                </Col>
            </Row>
        </Container>

    );

}

export default Home;
