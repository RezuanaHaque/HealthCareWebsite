import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Eachservice = (props) => {
    const {id,name,picture,about}=props.service;

    return (
        <div>
           <Col>
                <Card style={{ width: '20rem' }} className="mb-5 h-100">
                    <div className="d-flex"><div><Card.Img variant="top" src={picture} width="300px" height="200px" /></div>
                    <div className="w-50"><Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <small>{about}</small>
                        </Card.Text>
                        
                    </Card.Body></div></div>
                    <Link to={`/service/${id}`}><Button variant="info" className="w-100">Details</Button></Link>
                </Card> 
            </Col>
        </div>
    );
};

export default Eachservice;