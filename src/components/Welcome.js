import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel2 from '../Images/Carousel-2.jpg';
import Carousel3 from '../Images/Carousel-3.jpg';

class Welcome extends Component {
render() {
    return (<Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Carousel2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Carousel3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>)
}
}

export default Welcome;
