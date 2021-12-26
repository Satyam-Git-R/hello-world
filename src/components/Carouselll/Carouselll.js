import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel1 from '../../Images/Carousel-1.jpg';
import Carousel2 from '../../Images/Carousel-2.jpg';
import Carousel3 from '../../Images/Carousel-3.jpg';

class Carouselll extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item interval={3000}>
          <img width={1000} height={350}
            className="d-block w-100"
            src={Carousel1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img width={1000} height={350}
            className="d-block w-100"
            src={Carousel2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img width={1000} height={350}
            className="d-block w-100"
            src={Carousel3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Carouselll;
