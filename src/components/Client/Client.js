import React from 'react';
import './Client.css';

const Client = (props) => {
    const {name, img, comment} = props.client;
    return (
        <div className="col-6 col-md-4 col-lg-2">
            <div className="card-box background">
            <div className="card-thumbnail">
                <img src={img} className="my-img" alt=""/>
            </div>
            <h4 className="mt-2 text-dark">{name}</h4>
            <p className="text-dark">{comment}</p>
            </div>
        </div>
    );
};

export default Client;