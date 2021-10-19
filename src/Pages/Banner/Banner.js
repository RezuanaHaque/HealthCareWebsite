import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import banner1 from "../../img/banner1.jpg"
import banner2 from "../../img/banner2.jpg"
import banner3 from "../../img/banner3.jpg"
const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="fs-1">Your Health is Our <span className="text-danger fw-bold">Priority</span></h1>
                        <p>We at <span className="text-danger fw-bold fw-2">Health-Care</span> are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="fs-1">Consult Your <span className="text-danger fw-bold">Health Campaign</span></h1>
                        <p>See what can we do for you</p>
                        <Button variant="warning">OPEN 24HOURS</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="fs-1">Get The<span className="text-danger fw-bold"> Covid Test </span>Result In Just 24Hours</h1>
                        <p>We have extra section for covid patients, and at <span className="text-danger fw-bold fw-2">Health-Care</span> covid patients are treated well.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;