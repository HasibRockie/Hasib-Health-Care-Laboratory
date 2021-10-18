import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'
import { useState } from 'react';

const ServiceDetails = () => {
    const {slug} = useParams()
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch("../APIs/service-details.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                if(element.id == slug){
                    setServices(element)
                }
            });
        })
    }, [])

    return (
        <div className="service-details">
            <img src={services.image} alt="" />
            <h2>{services.title}</h2>
            <hr />
            <h5>{services.subTitle}</h5>
            <br />
            <p>{services.details}</p>
        </div>
    );
};

export default ServiceDetails;