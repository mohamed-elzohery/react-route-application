import React from 'react';
import { Card, Container } from 'react-bootstrap';

const About = () => {
    return (
    <Container>
        <Card className='my-3 p-4'>
        <Card.Body>
        <Card.Title>About Page</Card.Title>
        <Card.Text>
        This is about page
        </Card.Text>
    </Card.Body>
        </Card>
    </Container>
    )
}

export default About;