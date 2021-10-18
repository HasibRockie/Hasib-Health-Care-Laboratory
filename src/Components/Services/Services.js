import React, { useEffect } from 'react';
import '../WhyUs/WhyUs.css'
import { useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./APIs/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    // console.log(services);

    return (
        <div  className="why-us">
            <h1 className="text-gray-800">Our Services</h1> 
            <h2 className="title-span">       </h2><hr />
            <div className="goals-container">
            {
                services.map(service => <Service
                    key = {service.id}
                    service = {service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;