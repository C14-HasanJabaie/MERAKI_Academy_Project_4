import React from 'react'
import Container from 'react-bootstrap/Container';
import Cards from './Cards';
import Row from 'react-bootstrap/Row';
import Footer from './Footer';


function Containers() {
  return (
    <Container style={{}}>
        <h2 style={{ margin: '20px'}}>Car services</h2>
      <Row style={{ margin: '50px',marginRight:"100px", padding: "20px"  , gap :"20px"}}>
        
        <Cards/>
        <Cards/>
        <Cards/>
       
        <Cards/>
        <Cards/>
        <Cards/>

      </Row>
      <h2 style={{ margin: '20px'}}>Electronic  services</h2>
      <Row  style={{ margin: '50px',marginRight:"100px", padding: "10px"  , gap :"20px"}}>
        
        <Cards/>
        <Cards/>
        <Cards/>

      </Row>
      <h2 style={{ margin: '20px'}}>Home services</h2>
      <Row  style={{ margin: '50px',marginRight:"100px", padding: "10px"  , gap :"20px"}}>
        
        <Cards/>
        <Cards/>
        <Cards/>

      </Row>


      <Row  style={{ margin: '50px',marginRight:"100px", padding: "10px"  , gap :"20px"}}>
        
    

      </Row>



      
    </Container>
  );
}

export default Containers;