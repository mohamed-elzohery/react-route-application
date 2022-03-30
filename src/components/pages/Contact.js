import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Contact = () => {
    return (
    <Container>
        <Card className='my-3 p-4'>
        <Card.Body>
        <Card.Title>Contact Page</Card.Title>
        <Card.Text>
        This is contact page
        </Card.Text>
    </Card.Body>
        </Card>
    </Container>
    )
}

export default Contact;