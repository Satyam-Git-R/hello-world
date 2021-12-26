import React from 'react';
import './Headerrr.css';
import {Navbar, Nav, Form,Container, FormControl,Button, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { user } from "../Join/Join";
import logo from "../../Images/login.png";
import techmalgationLogo from "../../Images/techmalgationLogo.jpg";

const Header = () => {
    return (<Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={techmalgationLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Tech-Malgation
      </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="ml-4">Ideate</Nav.Link>
      <Nav.Link className="ml-4">Contribute</Nav.Link>
      <Nav.Link className="ml-4">Innovate</Nav.Link>
      {/* <NavDropdown className="ml-4" title="About-Us" id="nav-dropdown">
          <NavDropdown.Item eventKey="API Idea Board">Help</NavDropdown.Item>
          <NavDropdown.Item eventKey="API Blogs">Know More</NavDropdown.Item>
          <NavDropdown.Item eventKey="Use Cases">Contribute</NavDropdown.Item>
          <NavDropdown.Item eventKey="FAQs">FAQs</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="About Us">About Us</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form inline>
      <div className='UsrProfileImg'><img src={logo} alt="logo" /></div>  
      <div className='UsrProfileName'>{user}</div>
    </Form>
    </Container>
  </Navbar>)

}


export default Header;