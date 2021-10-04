import React from 'react';
import ControlledCarousel from '../ControlledCarousel/ControlledCarousel';
import HomePageSecondSection from '../HomeSecondSection/HomePageSecondSection';

const Home = () => {
    return (
        <div>
            <ControlledCarousel></ControlledCarousel>
            <HomePageSecondSection></HomePageSecondSection>
        </div>
    );
};

export default Home;