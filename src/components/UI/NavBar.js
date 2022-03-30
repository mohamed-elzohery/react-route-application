import React from "react";
import { NavLink } from "react-router-dom";
import { Container,Navbar, Nav, NavDropdown } from "react-bootstrap";
const NavBar = () => {
    return <Navbar bg="light" expand="lg">
    <Container>
      <NavLink className='navbar-brand' to='/home'>My Router App</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className='nav-link' to='/home'>Home</NavLink>
          <NavLink className='nav-link' to="/about">About</NavLink>
          <NavLink className='nav-link' to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default NavBar;