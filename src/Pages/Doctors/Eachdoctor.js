import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const Eachdoctor = (props) => {
    const { picture, name, about } = props.doctor;
    return (
        <div>
            {/* for showing all the info of doctor.json file */}
            <Col>
                <Card style={{ width: '13rem' }}>
                    <Card.Img variant="top" src={picture} width="100px" height="200px" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <small>Neurosergon</small>
                        <Card.Text>
                            <small>{about}</small>
                        </Card.Text>
                        <Button variant="primary">Take Appointment</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Eachdoctor;