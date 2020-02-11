import React, {useEffect, useState} from 'react';
import {Container, Col, Row, Nav, Card} from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroll-component';
import {getContributors} from "../../API/getData";

function Team() {
    const [contributors, setContributors] = useState([])
    const [page, setNewPage] = useState(2)
    useEffect(() => {
        getContributors().then(data => setContributors(data))
    }, [])

    const loadFunc = () => {
        setNewPage(page + 1)
        getContributors(page).then(data => {
            setContributors(contributors.concat(data))
        })
    }
    return (
        <InfiniteScroll
            dataLength={contributors.length}
            next={loadFunc}
            hasMore={true}
        >
            <Container>
                <h1>OUR TEAM</h1>
                <Row>
                    {contributors.map(item => (
                        <Col md={4} sm={12} key={item.id}>
                            <Card style={{width: '20rem', marginTop: "30px"}}>
                                <Nav.Link href="/projects">
                                    <Card.Img src={item.avatar_url} style={{borderRadius: '50%', width: '75%', alignSelf: 'center'}}/>
                                    <Card.Body>
                                        <Card.Title>{item.login}</Card.Title>
                                    </Card.Body>
                                </Nav.Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </InfiniteScroll>
    );
}

export default Team;
