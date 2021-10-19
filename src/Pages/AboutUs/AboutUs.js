import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="m-5">
            <h1 className="text-center m-5 fs-1">Welcome to <span className="text-danger fw-bold"> Health-Care</span></h1>
            <p className="text-center text-justify">Health-Care has over two decades of experience in the healthcare sector, <br /> and is known for providing quality healthcare and valuable experience to all domestic and international patients. <br /> Our healthcare offerings are supported by a team of compassionate and dedicated medical <br /> professionals who have rich knowledge and experience in their respective domains.</p>
            <h5 className="text-center mx-5 mt-5">Follow us:</h5>
            <div className="text-center">
            <a className="  fs-2" href="/facebook"><i className="fab fa-facebook-square"></i></a>
            <a className="  fs-2 ms-3" href="/linkedin"><i className="fab fa-linkedin"></i></a>
            <a className="  fs-2 ms-3" href="/instagram"><i class="fab fa-instagram-square"></i></a>
            </div>
            <div className=" mx-auto w-50 my-5">
            <h5>Have more queries?</h5>
            <h6 className="text-muted">Send us an Email</h6>
                        <InputGroup className="mb-3">
                        <FormControl as="textarea" aria-label="With textarea" />
                            <Button variant="outline-secondary" id="button-addon2" className="text-dark">
                                Send
                            </Button>
                        </InputGroup>
            </div>
        </div>
    );
};

export default AboutUs;