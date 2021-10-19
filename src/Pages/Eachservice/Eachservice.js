import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Eachservice = (props) => {
    // const {id}=props?.service;
    // console.log(id);
    // const {name,id}=service;
    return (
        <div>
            <Col>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={props?.service?.picture} />
                    <Card.Body>
                        <Card.Title className="fw-bold fs-4">{props?.service?.name}</Card.Title>
                        <Card.Text>
                            {props?.service?.about}
                        </Card.Text>
                        {/* <Link to="/more"><button className="pri"></button></Link> */}
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Eachservice;