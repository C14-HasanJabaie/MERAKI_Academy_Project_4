import React from 'react'
import NavScrollExample from './sharedComponents/Navbar'
import Containers from './sharedComponents/Container'
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './sharedComponents/Footer';

function Home() {
  return (
    <div > 
         <NavScrollExample/>


    <Card style={{ width: '100%' , height:'550px', backgroundImage: 'url(https://images.pexels.com/photos/3807811/pexels-photo-3807811.jpeg?auto=compress&cs=tinysrgb&w=600)', backgroundSize: 'cover', color: 'white' }}>
      <Card.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div  style={{marginTop:"200px", width: "40%"}}>
        <Card.Title>Expert Mobile Car Repair Service  – Where & When You Need It</Card.Title>
        <Card.Text>
        Our car repair service is the fastest and most trustworthy mobile car repair service in Kuwait. We provide expert on-demand service whenever our customers need it, wherever they may be. We provide professional car repair solutions to satisfy our customers.
        </Card.Text>
        <Button variant="primary">Book Services</Button>
        </div>
       
      </Card.Body>
    </Card>
    <div>
    </div>
    <Containers/>
    <FooterComponent/>

    </div>
  )
}

export default Home