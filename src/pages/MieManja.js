import React from 'react';
import { Navbar, Nav, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from "../ComponentsBeranda/Header"; // Pastikan path ini benar
import '../style/MieManja.css';
import '../style/Sidebar.css';

// Impor gambar
import Mie_manja from '../Assets/Mie_manja.jpg'; // Pastikan jalur file benar

const MieManja = () => {
  const menuItems = [
    {
      name: 'Mie Ori',
      price: '9,5k',
      description: 'Mie original dengan bumbu spesial',
      img: Mie_manja,
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <Header />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <Navbar className="Navbar d-flex flex-column vh-100" style={{ width: '200px' }}>
          <Nav className="Nav flex-column w-100">
            <Nav.Item>
              <Nav.Link as={Link} to="/Home">🏠 Beranda</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Pesanan">🛒 Pesanan</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Ulasan">⭐ Ulasan</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>

        {/* Main Content */}
        <div className="minuman-container" style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
          <h2>Selamat Datang!</h2>
          <h3>Daftar Menu Mie Manja</h3>
          <p>{menuItems[0].description}</p>

          {/* Daftar Item Menu */}
          <div className="menu-item-container">
            {menuItems.map((item, index) => (
              <Card key={index} className="menu-card mb-3">
                <Card.Img variant="top" src={item.img} alt={item.name} />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title>{item.name}</Card.Title>
                      <span className="text-muted">{item.price}</span>
                    </div>
                    <Button variant="outline-primary" size="sm" style={{ fontSize: '1.5rem' }}>🛒</Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MieManja;