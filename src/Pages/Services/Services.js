import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseServices from '../../Hooks/UseServices';
import Eachservice from '../Eachservice/Eachservice';

const Services = () => {
    const [serviceList] = UseServices()
    // console.log(serviceList);
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Our <span className="text-danger fw-bold">Services</span></h1>
            <Container>
                <Row  xs={12} md={4} lg={3}>
                    {
                        serviceList.map(service => <Eachservice  key={service.id} service={service}></Eachservice>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Services;