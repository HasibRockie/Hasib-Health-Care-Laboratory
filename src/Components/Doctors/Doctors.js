import React, { useEffect } from 'react';
import { useState } from 'react';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch("../APIs/doctors.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div className="doctors">
            {
                doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}> </Doctor>)
            }
        </div>
    );
};

const Doctor = (props) => {
    const {doctor} = props 
    return (
        <div className="doctor">
            <img src={doctor.image} alt="" />
            <h4>Name: {doctor.title}</h4>
            <p>Speciality: {doctor.details}</p>
        </div>
    )
}

export default Doctors;