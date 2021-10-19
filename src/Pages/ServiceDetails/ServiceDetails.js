import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

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
            <Card className="bg-dark text-black lh-lg">
                <Card.Img  className="opacity-75" src={singleservice?.picture} width="100%" height="700px" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="fs-1">{singleservice?.name}</Card.Title>
                    <Card.Text>
                        {singleservice?.description}
                    </Card.Text>
                    <Card.Text>For details, please contact us:</Card.Text>
                    <p><span className="fw-bold">Email</span> {singleservice?.email}</p>
                    <p><span className="fw-bold">Phone</span> {singleservice?.phone}</p>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default ServiceDetails;