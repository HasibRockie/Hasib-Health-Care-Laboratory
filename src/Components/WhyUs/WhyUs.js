import React from 'react';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div  className="why-us">
            <h1 className="text-gray-800">Why us? </h1> <hr />
            <p>Trying to get best health and mental treatment <br /> and services or invest in your overall health? We give<br /> you the right features to hit your goals.</p>
            <div className="goals-container">
                <div className="goals">
                <i class="fas fa-notes-medical fa-2x"></i>
                    <h4 className="title">All medical Supports </h4>
                    <p className="details">Dedicated doctors and nurses are always ready to provide their best services to you</p>
                </div>
                <div className="goals">
                <i class="fas fa-stethoscope fa-2x"></i>
                    <h4 className="title">Almost 100 dedicated doctors</h4>
                    <p className="details">Best doctors are providing services here for long term. 100% satisfaction is our guaranty</p>
                </div>
                <div className="goals">
                <i class="fas fa-prescription fa-2x"></i>
                    <h4 className="title">24/7 services </h4>
                    <p className="details">all the times, you will get the services whenever you need. Serving is our first priority.</p>
                </div>
                <div className="goals">
                <i class="fas fa-ambulance fa-2x"></i>
                    <h4 className="title">Ambulances all over the country</h4>
                    <p className="details">Our ambulance will be ready for you, even you live in any remote area. We can do any sacrifices for people </p>
                </div>
                <div className="goals">
                <i class="fas fa-procedures fa-2x"></i>
                    <h4 className="title">Sufficient cabin and beds</h4>
                    <p className="details">We provide healthy, neat and clean cabins and beds for patients. All germs and virus protected</p>
                </div>
                <div className="goals">
                <i class="fas fa-running fa-2x"></i>
                    <h4 className="title">Better life surity</h4>
                    <p className="details">We never disappoint our patients. We promise you to ensure your better healthy life.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;