import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Slider from './Slider';


function Home() {



    return (
          <>
                <Slider/>
     
                <Container className="pt-2">
                <h5 className="my-5 text-center display-4">Welcome To Mallu's Food Court</h5>
                <Row>
    
                    <Col md={4}>
                        <Card style={{ marginBottom: '30px' }}>
                            <Card.Img src="/images/fish.jpg" style={{ height: '270px'}}  />
                            <Card.Body>
                                <Card.Title>Fish Items</Card.Title>
                                <Card.Text>
                                    Here's some Fish Specials
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button className="ms-3" as={Link} to="/FishMenu">View More</Button>
    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ marginBottom: '30px' }}>
                            <Card.Img src="/images/nonveg.jpg" style={{ height: '270px' }} />
                            <Card.Body>
                                <Card.Title>Chicken Items</Card.Title>
                                <Card.Text>
                                Here's some Chicken Specials
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                <Button className="ms-3" as={Link} to="/ChickenMenu">View More</Button>
    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ marginBottom: '30px' }}>
                            <Card.Img src="/images/veg.jpg" style={{ height: '270px' }}  />
                            <Card.Body>
                                <Card.Title>Veg Items</Card.Title>
                                <Card.Text>
                                    Here's some Veg Special
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                <Button className="ms-3" as={Link} to="/VegMenu">View More</Button>
    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
    
            </Container>
            </>

    );
}

export default Home;