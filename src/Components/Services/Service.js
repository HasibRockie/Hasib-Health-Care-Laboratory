import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {service} = props 
    return (
        <div className="goals service">
        <img src={service.image} alt="" />
            <h4 className="title">{service.title} </h4>
            <button className="btn bg-green-500">
            <Link to={service.button}>Discover</Link>
            </button>
        </div>
    );
};

export default Service;