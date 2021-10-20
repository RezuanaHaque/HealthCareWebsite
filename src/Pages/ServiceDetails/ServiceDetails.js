import React, { useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceID } = useParams()
    const [serviceList, setServiceList] = useState([])
    const [singleservice, setSingleservice] = useState({});
    useEffect(() => {
        fetch("/servicedetails.json")
            .then(res => res.json())
            .then(data => setServiceList(data.employee))
    }, [])

    useEffect(() => {
        const foundService = serviceList.find
            (service => service.login.id == serviceID)
        setSingleservice(foundService)
    }, [serviceList])

    // const {name,picture,phone,email,description}=singleservice;
    return (
        <div>
            <Card className="bg-dark text-black lh-lg text-center">
                <Card.Img  className="opacity-75" src={singleservice?.picture} width="100%" height="700px" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="fs-1">{singleservice?.name}</Card.Title>
                    <Card.Text className="fs-4">
                        {singleservice?.description}
                    </Card.Text>
                    <Card.Text className="fs-4 fw-bolder border bg-info">For details, please contact us:</Card.Text>
                    <p className="fw-bold"><span className="fs-4 fw-bold">Email : </span> {singleservice?.email}</p>
                    <p className="fw-bold"><span className="fs-4 fw-bold">Phone : </span> {singleservice?.phone}</p>
                    <Link to="/booking"><Button variant="warning" className="w-25 fw-bold">More Details and Appointment</Button></Link>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default ServiceDetails;