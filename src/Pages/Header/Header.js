import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import UseAuth from '../../Hooks/UseAuth';
import "./Header.css"

const Header = () => {
    const { user,logOut } = UseAuth()
    // console.log(user);
    return (
        <div>
            <Navbar  className=" pt-0" collapseOnSelect expand="lg" bg="light" variant="light" >
                <Container>
                    <Navbar.Brand href="/home" className="fs-2"><i className="fas fa-clinic-medical  text-danger mb-2 fs-1 align-middle"></i> <span className="text-danger fw-bold"> Health-Care</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/services" className=" text-black fw-bold fw-2">Services</Nav.Link>
                            <Nav.Link href="/about" className=" text-black fw-bold fw-2">About us</Nav.Link>
                            <Nav.Link href="/team" className=" text-black fw-bold fw-2">Our Team</Nav.Link>
                            <Nav.Link href="/team" className=" text-black fw-bold fw-2">Book Appointment</Nav.Link>
                        </Nav>
                        <Nav>



                            {user.email ?

                                <>
                                    <p className="mt-3">Hello, {user?.displayName}</p>
                                    <Nav.Link><Button onClick={logOut} variant="warning" className=" text-black fw-bold fw-2">Log out</Button></Nav.Link>
                                </>
                                :
                                <><Nav.Link href="/register" ><Button variant="warning" className=" text-black fw-bold fw-2">Register</Button>{' '}</Nav.Link>
                                    <Nav.Link href="/login">
                                        <Button variant="warning" className=" text-black fw-bold fw-2">Log in</Button>
                                    </Nav.Link></>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;