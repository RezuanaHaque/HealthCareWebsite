import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="shadow shadow-info shadow-intensity-lg">
            <hr />
            <Row>
                <Col sm={4}>

                    <div className="d-flex  align-items-center">
                        <div>
                            <i className="fas fa-clinic-medical text-danger fs-3"></i>
                        </div>
                        <div className>
                            <p className="text-danger fw-bold fs-3"> Health-Care</p>
                            <p>We care for your health</p>
                        </div>
                        
                    </div>
                </Col>
                <Col sm={4}>
                <p className="text-info fw-bold fs-3 mt-3">Social Networks</p>
                <hr style={{width:"40%",textAlign:"left",marginLeft:0,height:"5px",color:"red"}}></hr>
                <div className="d-flex"><i className="fab fa-facebook-square fs-1"></i>
                <p>Facebook</p></div>
                <div className="d-flex"><i className="fab fa-linkedin fs-1"></i>
                <p>Linkedin</p></div>
                <div className="d-flex"><i className="fab fa-twitter-square fs-1"></i>
                <p>Twitter</p></div>
                </Col>
                <Col sm={4}>
                <p className="text-info fw-bold fs-3 mt-3" > Emergency number</p>
                <hr style={{width:"40%",textAlign:"left",marginLeft:0,height:"5px",color:"red"}}></hr>
                <h2 className="text-danger fw-bold">0-800-777-2331</h2>
                <p>Call us now if you are in a medical emergency need, we will reply swiftly and provide you with a medical aid.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;