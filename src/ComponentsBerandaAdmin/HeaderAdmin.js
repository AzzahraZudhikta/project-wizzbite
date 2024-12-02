import React from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaUserCircle } from 'react-icons/fa';
import '../style/Header.css';

const HeaderAdmin = () => {
  return (
    <Navbar
      expand="lg"
      className="header-navbar"
      style={{ backgroundColor: '#D9D9D9', padding: '10px 20px' }}
    >
      <Container fluid className="header-container d-flex align-items-center">
        {/* Logo */}
        <Navbar.Brand
          className="header-brand"
          style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#000',
          }}
        >
          WizzBite
        </Navbar.Brand>

        {/* Home Icon */}
        <Nav className="ms-auto">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/HomeAdmin"
              className="header-home-link"
              style={{
                color: '#000',
                fontSize: '1.2rem',
                marginRight: '20px',
              }}
            >
              <FaHome />
            </Nav.Link>
          </Nav.Item>

          {/* Profile Dropdown */}
          <Dropdown align="end" className="header-profile-dropdown">
            <Dropdown.Toggle
              variant="link"
              className="header-profile-toggle"
              style={{ border: 'none', background: 'none' }}
            >
              <FaUserCircle className="profile-icon" size={28} style={{ color: '#000' }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/profil">
                Profil
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderAdmin;