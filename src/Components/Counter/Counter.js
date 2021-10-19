import React from "react";
import "./Counter.css";

import CountUp from "react-countup";

const Counter = () => {

  return (
    <div className="counter">
      <div>
        <h5>
          Avaiable Doctors
        </h5>
        <p> <CountUp
            start={0}
            end={500}
            duration={2.00}
            separator=""
            suffix="+"
          /></p>
      </div>
      <div>
          <h5>Available Stuffs</h5>
        <p>
          <CountUp
            start={0}
            end={2200}
            duration={2.00}
            separator=""
            suffix="+"
          />
        </p>
      </div>
      <div>
      <h5>Available Beds</h5>
        <p>
          <CountUp
            start={0}
            end={1700}
            duration={2.00}
            separator=""
            suffix="+"
          />
        </p>
      </div>
      <div>
      <h5>Available Services</h5>
        <p>
          <CountUp
            start={0}
            end={350}
            duration={2.00}
            separator=""
            suffix="+"
          />
        </p>
      </div>
    </div>
  );
};

export default Counter;
