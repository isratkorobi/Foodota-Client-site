import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Appbar = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home"className="fw-bold">Foodota</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
          
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/myOrder">
              My Orders
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/allOrder">
              Manage All Orders
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/newItem">
              Add A New Item
              </NavDropdown.Item>
              </NavDropdown> 
              {user?.email ? (
                <Button onClick={logOut} variant="primary">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              <Nav.Link>
                <a href="#login">{user?.displayName}</a>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Appbar;
