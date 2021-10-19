import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Counter from '../../Components/Counter/Counter';
import Services from '../../Components/Services/Services';
import WhyUs from '../../Components/WhyUs/WhyUs';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Carousel></Carousel> 
            <Services></Services>
            <WhyUs></WhyUs>
            <Counter></Counter>
        </div>
    );
};

export default Home;