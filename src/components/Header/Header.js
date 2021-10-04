import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import drivingLogo from '../Header/driving-logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/home">
                <img
                src={drivingLogo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Navbar.Brand as={Link} to="/home" className="fw-bolder">Learn Driving</Navbar.Brand>
                </Nav>
                <Nav>
                <Nav.Link  as={NavLink} to="/home" className="fw-bolder">Home</Nav.Link>
                <Nav.Link  as={NavLink} to="/services" className="fw-bolder">
                    Services
                </Nav.Link>
                <Nav.Link  as={NavLink} to="/about-us" className="fw-bolder">
                    About Us
                </Nav.Link>
                <Nav.Link  as={NavLink} to="/login" className="fw-bolder">
                    Login
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;