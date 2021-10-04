import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carouselPic1 from './images/1.jpg';
import carouselPic2 from './images/2.jpg';
import carouselPic3 from './images/3.jpg';
import carouselPic4 from './images/4.jpg';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carouselPic1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h2 className="fw-bolder">Learn How To Drive</h2>
            <p className="fw-bolder">We provide best services.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carouselPic2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h2 className="fw-bolder">Learn Safely</h2>
            <p className="fw-bolder">We provide necessary safety.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carouselPic3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h2 className="fw-bolder">Learn Easily</h2>
            <p className="fw-bolder">
                We will teach you in a easily
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carouselPic4}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h2 className="fw-bolder">Learn At Low Price</h2>
            <p className="fw-bolder">
                We charge low price.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
};

export default ControlledCarousel;