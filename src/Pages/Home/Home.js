import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Services from '../../Components/Services/Services';
import WhyUs from '../../Components/WhyUs/WhyUs';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Carousel></Carousel> 
            <Services></Services>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;