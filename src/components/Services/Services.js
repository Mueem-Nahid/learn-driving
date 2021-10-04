import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    //sate
    const [services, setServices] = useState([]);

    //fetching data
    useEffect( ()=> {
        fetch('./Data.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return (
        <div className="container">
            <div>
                <h2 className="text-center fw-bold p-3">Our services</h2>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service key={service.id}
                    service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;