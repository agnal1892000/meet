import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {/* {user ? (
            <p onClick={logoutUser}>Logout</p>
          ) : ( */}
          
            <Nav.Link href="/login">Login</Nav.Link>
          {/* )} */}
          <Nav.Link href="/signup">SignUp</Nav.Link>
          <Nav.Link href="/upload">Upload</Nav.Link>
          <Nav.Link href="/login">Logout</Nav.Link>
        </Nav>
      </Navbar>

      {user && <p> Hello {user.username}</p>}
    </>
  );
};

export default Header;
