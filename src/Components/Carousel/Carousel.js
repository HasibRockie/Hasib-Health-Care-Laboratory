import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Carousel.css";
import { Link } from 'react-router-dom';

const content = [
  {
    title: "Special psychological and psycriatric care with experienced consultant",
    description:
      "We have more than 50+ world class doctor, surgeon and consultant.",
    button: "See Services",
    image: "https://i.ibb.co/x7RnhnD/1.png",
  },
  {
    title: "Most caring service for elder people",
    description:
      "Healthier environment, good nursing and services are our main concern",
    button: "Discover",
    image: "https://i.ibb.co/gWJcmD7/2.png",
  },
  {
    title: "Consultancy for  food, hygene and attractive fitness",
    description:
      "Here You will get the international quality of medical treatment, consultancy, services and supports. Grab this opportunity for a better and healthy life.",
    button: "See Services",
    image: "https://i.ibb.co/KhG0wGX/3.png",
  },
  {
    title: "Get all branches of Medical Consultancy and supports",
    description:
      "Here You will get the international quality of medical treatment, consultancy, services and supports. Grab this opportunity for a better and healthy life.",
    button: "See Services",
    image: "https://i.ibb.co/3Sm0K5M/4.png",
  },
];

const HeadCarousel = () => {
  return (
    <div>
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button><Link to='/services'>{item.button}</Link></button>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeadCarousel;
