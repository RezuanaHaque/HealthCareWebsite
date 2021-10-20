import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Eachdoctor from './Eachdoctor';

const Doctors = () => {
    // loading info of doctor.json file(our team section)
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Our <span className="text-danger fw-bold">Doctors</span></h1>
            <Container>
                <Row xs={12} md={4} lg={4}>
                    {

                        doctors.map(doctor => <Eachdoctor key={doctor.name} doctor={doctor}></Eachdoctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;