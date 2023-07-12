import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {



    return (
      

        
       
        <Carousel>
        <Carousel.Item interval={1500}>
          <img style={{ height: 500 }} 
            className="d-block w-100"
src="https://pbs.twimg.com/media/EjPDeg9XsAAgi73.jpg:large"
            alt="Image One"
          />
        
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img style={{ height: 500 }} 
            className="d-block w-100"
src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/10/kerala-food.jpg"
            alt="Image Two"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img style={{ height: 500 }} 
            className="d-block w-100"
src="https://www.keralatourism.org/images/enchanting_kerala/large/kerala_sadya20200507070557_1002_1.jpg"
            alt="Image Two"
          />
         
        </Carousel.Item>
      </Carousel>
      
        
    );
}

export default Slider;