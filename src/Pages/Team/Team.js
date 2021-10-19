import React from 'react';
import Doctors from '../../Components/Doctors/Doctors';
import './Team.css'

const Team = () => {
    return (
        <div>
            <h2 className="team-title">OUR SPECIALISTS</h2> 
            <h5 className="team-subtitle">We have specialist doctor’s for emergency services</h5>
            <hr />
            <Doctors></Doctors>
        </div>
    );
};

export default Team;