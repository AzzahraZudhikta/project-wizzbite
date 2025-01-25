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

      <div style={{ display: 'flex', flex: 1 }}>
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
        <div
          className="minuman-container"
          style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto', // Membuat area ini bisa di-scroll
          }}
        >
          <h2>Selamat Datang!</h2>
          <h3>Daftar Menu Mie Manja</h3>
          <p>{menuItems[0].description}</p>

          {/* Daftar Item Menu */}
          <div
            className="menu-item-container"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'flex-start',
            }}
          >
            {menuItems.map((item, index) => (
              <Card key={index} className="menu-card mb-3" style={{ width: '250px' }}>
                <Card.Img
                  variant="top"
                  src={item.img}
                  alt={item.name}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = 'https://via.placeholder.com/150'; // Placeholder jika gambar gagal dimuat
                  }}
                />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title>{item.name}</Card.Title>
                      <span className="text-muted">{item.price}</span>
                    </div>
                    <Button variant="outline-primary" size="sm">
                      🛒
                    </Button>
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
