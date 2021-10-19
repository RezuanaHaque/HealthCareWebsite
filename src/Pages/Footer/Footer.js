import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
            <Row className="shadow shadow-info shadow-intensity-lg mt-5 h-100 bg-dark">
                <Col sm={4}>

                    <div className="d-flex p-5">
                        <div className="ms-5">
                            <i className="fas fa-clinic-medical text-danger fs-3"></i>
                        </div>
                        <div>
                            <p className="text-danger fw-bold fs-4"> Health-Care</p>
                            <p className="me-5">We care for your health</p>
                        </div>
                        
                    </div>
                </Col>
                <Col sm={4}>
                <p className="text-info fw-bold fs-4 mt-3">Social Networks</p>
                <hr style={{width:"40%",textAlign:"left",marginLeft:0,height:"5px",color:"red"}}></hr>
                <div className="d-flex text-white"><i className="fab fa-facebook-square fs-5"></i>
                <p>Facebook</p></div>
                <div className="d-flex text-white"><i className="fab fa-linkedin fs-5"></i>
                <p>Linkedin</p></div>
                <div className="d-flex text-white"><i className="fab fa-twitter-square fs-5"></i>
                <p>Twitter</p></div>
                </Col>
                <Col sm={4}>
                <p className="text-info fw-bold fs-4 mt-3" > Emergency number</p>
                <hr style={{width:"40%",textAlign:"left",marginLeft:0,height:"5px",color:"red"}}></hr>
                <h2 className="text-danger fw-bold">0-800-777-2331</h2>
                <small className=" text-white">Call us now if you are in a medical emergency need, we will reply swiftly and provide you with a medical aid.</small>
                </Col>
            </Row>

    );
};

export default Footer;