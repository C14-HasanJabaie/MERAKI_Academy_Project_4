// FooterComponent.js
import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterComponent = () => {
  return (
    <footer style={{  color: 'white', padding: '20px 0' }}>
      <Row className="justify-content-center">
        <Col md={4} className="mb-3">
          <Card style={{}}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=600"  style={{width:"100px" , height:"100px" , borderRadius:"50px"}}/>
            <Card.Body>
              <Card.Title>Card 1 Title</Card.Title>
              <Card.Text>
                this is services 
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-3">
          <Card >
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card 2 Title</Card.Title>
              <Card.Text>
                This is some text within card 2, providing more details.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-3">
          <Card >
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card 3 Title</Card.Title>
              <Card.Text>
                This is some text within card 3, giving insights.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterComponent;