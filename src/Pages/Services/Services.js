import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseServices from '../../Hooks/UseServices';
import Eachservice from '../Eachservice/Eachservice';

const Services = () => {
    const [serviceList] = UseServices()
    return (
        <div>
            <div><h1 className="text-center m-5">Our <span className="text-danger fw-bold">Services</span></h1>
            <Container>
                <Row  xs={12} md={4} lg={3} className="g-4">
                    {
                        serviceList.map(service => <Eachservice  key={service.id} service={service}></Eachservice>)
                    }
                </Row>
            </Container></div>
        </div>
    );
};

export default Services;