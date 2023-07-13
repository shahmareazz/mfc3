import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useState,useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';

function Aboutus() {

 

  return (

    
    
    <Container className="pt-2">
    <h5 className="my-5 text-center display-4">About Us</h5>
    <Row>
    <Col md={12}>
                      we are passionate about creating a memorable dining experience for our valued guests.
                     We take pride in offering a diverse menu that caters to all tastes and preferences, 
                     whether you're a meat lover, seafood enthusiast, or a vegetarian.
                    Our culinary team is dedicated to crafting dishes that showcase the finest ingredients, 
                    carefully selected to ensure freshness and quality. From succulent chicken delicacies to tender 
                    and juicy meats, our menu offers a wide range of options to satisfy your cravings.
                    For those who savor the flavors of the sea, our selection of fish dishes is a true delight.
                    From grilled salmon to delectable seafood curries, we strive to bring you the finest and freshest catches of the day.
                    We also understand the importance of catering to our vegetarian guests. Our dedicated vegetarian section features a variety
                     of flavorful and wholesome dishes that celebrate the richness of vegetables and plant-based ingredients.
                    From aromatic vegetable biryanis to flavorful tofu stir-fries, we ensure that every vegetarian palate is delighted.
        </Col>
    
   
  
  </Row>
   
    </Container>

   
  );
}

export default Aboutus;