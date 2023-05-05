import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Navigation: React.FC = () => {
    return (
        <Navbar expand="lg" fixed="top" className="fixed-top">
            <Container fluid className="my-container">
            <Navbar.Brand href="#">AI Book Recommendation</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#" onClick={() => {
                        // navigate to ProfilesView component
                        window.location.href = "/";
                    }}>Home</Nav.Link>
                    <Nav.Link href="#" onClick={() => {
                        // navigate to ProfilesView component
                        window.location.href = "/profiles";
                    }}>Profile</Nav.Link>
                    <Nav.Link href="#">Book</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
