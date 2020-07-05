import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar bg="primary" variant="light" expand="lg">
            <Navbar.Brand href="/">Covid19</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
