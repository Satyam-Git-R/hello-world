import React from 'react';
import {Navbar, Nav, Form, FormControl,Button, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Greet = () => {
    return (<Navbar bg="dark" variant="dark">
    <Navbar.Brand className="ml-5" href="#home">Covid-19 Center (Prayagraj/Allahabad)</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="ml-4" href="#Lead">Medication</Nav.Link>
      <Nav.Link className="ml-4" href="#Consume">Hospitalization</Nav.Link>
      <Nav.Link className="ml-4" href="#Build">Complain</Nav.Link>
      <NavDropdown className="ml-4" title="About-Us" id="nav-dropdown">
          <NavDropdown.Item eventKey="API Idea Board">Help</NavDropdown.Item>
          <NavDropdown.Item eventKey="API Blogs">Know More</NavDropdown.Item>
          <NavDropdown.Item eventKey="Use Cases">Contribute</NavDropdown.Item>
          <NavDropdown.Item eventKey="FAQs">FAQs</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="About Us">About Us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>)

}


export default Greet;