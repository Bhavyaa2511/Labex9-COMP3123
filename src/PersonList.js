import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row } from 'react-bootstrap';

class PersonList extends Component {
    state = {
        persons: [] // Default empty state for the person list
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <Container>
                <h1 className="text-center my-4">User List</h1>
                <Row>
                    {this.state.persons.map((person, index) => (
                        <Card
                            key={index}
                            className="mb-4"
                            style={{ width: '18rem', margin: '10px', backgroundColor: '#008080', color: '#fff' }}
                        >
                            <Card.Img variant="top" src={person.picture.large} />
                            <Card.Body>
                                <Card.Title>
                                    {`${person.name.title} ${person.name.first} ${person.name.last}`}
                                </Card.Title>
                                <Card.Text>
                                    <b>User Name:</b> {person.login.username}<br />
                                    <b>Gender:</b> {person.gender}<br />
                                    <b>Address:</b> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.country}`}<br />
                                    <b>Email:</b> {person.email}<br />
                                    <b>Phone:</b> {person.phone}<br />
                                    <b>Birth Date:</b> {new Date(person.dob.date).toLocaleDateString()} ({person.dob.age} years)<br />
                                    <b>Register Date:</b> {new Date(person.registered.date).toLocaleDateString()}
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default PersonList;
