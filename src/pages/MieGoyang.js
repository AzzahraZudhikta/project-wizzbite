import React from 'react';
import { Navbar, Nav, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from "../ComponentsBeranda/Header"; // Pastikan path ini benar
import '../style/MieGoyang.css';
import '../style/Sidebar.css';

// Impor gambar
import Mie_goyang from '../Assets/Mie_goyang.jpg'; // Pastikan jalur file sesuai

const MieGoyang = () => {
  const menuItems = [
    { name: 'Mie Level 1', price: '11,5k', spicyLevel: '5 Cabe', img: Mie_goyang },
    { name: 'Mie Level 2', price: '11,5k', spicyLevel: '10 Cabe', img: Mie_goyang },
    { name: 'Mie Level 3', price: '11,5k', spicyLevel: '15 Cabe', img: Mie_goyang },
    { name: 'Mie Level 4', price: '12,5k', spicyLevel: '25 Cabe', img: Mie_goyang },
    { name: 'Mie Level 5', price: '12,5k', spicyLevel: '35 Cabe', img: Mie_goyang },
    { name: 'Mie Level 6', price: '13k', spicyLevel: '50 Cabe', img: Mie_goyang },
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
          <h3>Daftar Menu Mie Goyang</h3>
          <p>
            Mie pedas goreng kecap dengan pilihan level 1-6:
            <br />
            Lv 1 = 5 Cabe &nbsp;&nbsp; Lv 2 = 10 Cabe &nbsp;&nbsp; Lv 3 = 15 Cabe
            <br />
            Lv 4 = 25 Cabe &nbsp;&nbsp; Lv 5 = 35 Cabe &nbsp;&nbsp; Lv 6 = 50 Cabe
          </p>

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

export default MieGoyang;