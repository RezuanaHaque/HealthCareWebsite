import React from 'react';
import { Col, FormControl, InputGroup, Row, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="text-light bg-dark p-5 mt-5">
                <Row>
                    <Col>
                        <h5 className="text-info fw-bold fs-4 mt-3">Follow us:</h5>
                        <a className="text-light  fs-5" href="/facebook"><i className="fab fa-facebook-square"></i></a>
                        <a className="text-light  fs-5 ms-3" href="/linkedin"><i className="fab fa-linkedin"></i></a>
                        <a className="text-light  fs-5 ms-3" href="/instagram"><i className="fab fa-instagram-square"></i></a>
                    </Col>
                    <Col>
                        <h5 className="text-info fw-bold fs-4 mt-3">Quick Links</h5>
                        <a className="text-light text-decoration-none" href="/home">Home</a><br />
                        <a className="text-light text-decoration-none" href="/services">Services</a><br />
                        <a className="text-light  text-decoration-none" href="/aboutus">About us</a><br />
                        <a className="text-light text-decoration-none" href="/employee">Employees</a>
                    </Col>
                    <Col>
                        <h5 className="text-info fw-bold fs-4 mt-3">Be the first to know about new updates</h5>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2" className="text-light">
                                Sign up
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col>
                        <h5 className="text-info fw-bold fs-4 mt-3" > Emergency number</h5>

                        <h2 className="text-danger fw-bold">0-800-777-2331</h2>
                        <small className=" text-white">Call us now if you are in a medical emergency need, we will reply swiftly and provide you with a medical aid.</small>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default Footer;
