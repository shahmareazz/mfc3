import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useState,useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';

function Footer() {

 

  return (


  
<footer class="bg-dark text-center text-white">

 
  

  <section class="">
    <div class="container text-center text-md-start p-4">
     
      <div class="row mt-3">
     
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           <img src="/images/mfc-logo.png" style={{ height: 150, width: 200 }} ></img>
        <br></br><br></br>
          <p>
          We make fried chicken—heck, we practically invented it. If they ever make a food hall of fame, our chicken is gonna be a first-ballot inductee.

          </p>
        </div>
    
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Menu
          </h6>
          <p>
            <a href="#!" class="text-reset">Family Meal</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Non Veg</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Veg</a>
          </p>
       
        </div>
  
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Social links
          </h6>
          <p>
            <a href="#!" class="text-reset">Instagram</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Facebook</a>
          </p>
         
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Valanchery, Malappuram, Kerala</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@mfc.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 91 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 91 234 567 89</p>
        </div>
 
      </div>

    </div>
  </section>

  <div class="text-center p-4" >
    © 2023 Copyright: 
    <a class="text-reset fw-bold" href="#">MFC</a>
  </div>

</footer>


   
  );
}

export default Footer;