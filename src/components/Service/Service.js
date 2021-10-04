import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Service.css';

const Service = (props) => {
    const {title, des, img, rating} = props.service;
    return (
        <Col>
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{des}</Card.Text>
            <Card.Text>User rating: <span><Rating initialRating={rating} readonly emptySymbol="far fa-star icon" fullSymbol="fas fa-star icon"></Rating></span>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Service;