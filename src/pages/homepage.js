import Container from "react-bootstrap/Container";
import React from "react";
import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Homepage = () => {
  return (
    // <div>
    //     <p>
    //         you are logged in to the home page
    //     </p>
    // </div>
    <div>
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto  nav_bar_warpper">
          <Link to="/signup">Signuppage</Link>
          <Link to="/login">Loginpage</Link>
          <Link to="/upload">Uploadpage</Link>
          <Link to="/login">Logout</Link>
        </Nav>
      </Navbar>
      <h1>Home page</h1>
    </div>
  );
};

export default Homepage;
