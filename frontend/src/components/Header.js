import React from 'react';
import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Shoplyft</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Categories" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#features"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                            <Nav.Link href="#pricing"><i className="fas fa-user"></i> Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
    );
}

export default Header;