import React from 'react';
import ControlledCarousel from '../ControlledCarousel/ControlledCarousel';
import HappyClinets from '../HappyClients/HappyClinets';
import HomePageSecondSection from '../HomeSecondSection/HomePageSecondSection';

const Home = () => {
    return (
        <div>
            <ControlledCarousel></ControlledCarousel>
            <HomePageSecondSection></HomePageSecondSection>
            <HappyClinets></HappyClinets>
        </div>
    );
};

export default Home;