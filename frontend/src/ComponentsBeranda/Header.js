import React from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import '../style/Header.css';

const Header = () => {
    return (
        <Navbar expand="lg" className="header-navbar">
            <Container fluid className="header-container">
                {/* Logo */}
                <Navbar.Brand className="header-brand">
                    WizzBite
                </Navbar.Brand>

                {/* Right-aligned Profile Icon */}
                <Nav className="ms-auto">
                    <Dropdown align="end" className="header-profile-dropdown">
                        <Dropdown.Toggle variant="link" className="header-profile-toggle">
                            <FaUserCircle className="profile-icon" size={28} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/Profil">Profil</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/Keluar">Keluar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;