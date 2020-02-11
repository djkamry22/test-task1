import React, {useEffect, useState} from 'react';
import {Carousel, Container, ListGroup} from "react-bootstrap";
import {getDetails, getContributors, getTotalCommits} from "../../API/getData";

function Projects() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const [details, setDetails] = useState({})
    const [contributors, setContributors] = useState([])
    const [commits, setCommits] = useState([])
    useEffect(() => {
        getDetails().then(data => setDetails(data))
        getContributors().then(data => setContributors(data))
        getTotalCommits().then(data => setCommits(data))
    }, [])

    console.log(commits)
    return (
        <Container>
            <h1>PROJECTS</h1>
            <ListGroup>
                <ListGroup.Item>
                    <h5>Full name</h5> {details.full_name}
                    <h5>Description</h5> {details.description}
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Head branch</h5> {details.default_branch}
                    <h5>Forks</h5> {details.forks_count}
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Created</h5> {details.created_at}
                    <h5>Last update</h5> {details.updated_at}
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Subscribers</h5> {details.subscribers_count}
                </ListGroup.Item>
                <ListGroup.Item style={{background: '#f8f9fa'}}>
                    <h5>Contributors</h5>
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        interval={1800}
                        indicators={false}
                        pauseOnHover={false}
                        controls={false}
                    >
                        {contributors.map(item => (
                            <Carousel.Item
                                key={item.id}>
                                <img
                                    style={{
                                        borderRadius: '50%',
                                        width: '30%',
                                        margin: '0 auto',
                                        display: 'flex'
                                    }}
                                    src={item.avatar_url}
                                    alt={item.login}
                                />
                                <h4 style={{color: 'black', textAlign: 'center'}}>{item.login}</h4>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default Projects;
