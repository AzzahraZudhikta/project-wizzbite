import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../style/SidebarAdmin.css';

const SidebarAdmin = () => {
  return (
    <div className="sidebar-container">
      {/* Tambahkan judul Admin */}
      <div className="sidebar-header text-center">
        <h5>Admin</h5>
      </div>
      <Navbar className="navbar flex-column">
        <Nav className="nav flex-column w-100">
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/MenuAdmin" className="nav-link">
              📋 Menu
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/PesananAdmin" className="nav-link">
              🛒 Pesanan
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/LaporanKeuangan" className="nav-link">
              📊 Laporan Keuangan
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/UlasanAdmin" className="nav-link">
              ⭐ Ulasan
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default SidebarAdmin;