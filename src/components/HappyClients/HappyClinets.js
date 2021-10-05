import React, { useEffect, useState } from 'react';
import Client from '../Client/Client';

const HappyClinets = () => {
    //sate
    const [clients, setClients] = useState([]);

    //fetching data
    useEffect( ()=> {
        fetch('./customerData.JSON')
        .then(res => res.json())
        .then(data => setClients(data));
    }, []);

    return (
        <div className="container">
            <h2 className="text-center fw-bold pb-5">Our happy clients</h2>
            <div className="row">
                {
                    clients.map(client => <Client key={client.id}
                    client={client}></Client>)
                }
            </div>
        </div>
    );
};

export default HappyClinets;