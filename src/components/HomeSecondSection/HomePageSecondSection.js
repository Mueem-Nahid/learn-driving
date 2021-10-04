import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import ServiceImg from './services.jpg';

const HomePageSecondSection = () => {
    //sate
    const [serviceLists, setServiceLists] = useState([]);

    //fetching data
    useEffect( ()=> {
        fetch('./Data.JSON')
        .then(res => res.json())
        .then(data => setServiceLists(data));
    }, []);
    return (
        <div className="container">
            <div>
                <h2 className="text-center fw-bold pt-5">Our services</h2>
            </div>
            <Row xs={1} md={2} className="g-4 py-5">
                <img src={ServiceImg} alt=""/>
                <div>
                    <Row xs={1} md={2} className="g-4">
                    {
                        serviceLists.slice(0,4).map(service => <Service key={service.id}
                        service={service}></Service>)
                    }
                    </Row>
                </div>
            </Row>
            
        </div>
    );
};

export default HomePageSecondSection;