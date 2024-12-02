import React from 'react';
import { Navbar, Nav, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from "../ComponentsBeranda/Header"; // Pastikan path ini benar
import '../style/MieGoyang.css';
import '../style/Sidebar.css';

// Impor gambar
import Mie_disko from '../Assets/Mie_disko.jpg'; // Pastikan jalur file sesuai

const MieDisko = () => {
  const menuItems = [
    { name: 'Lv.1', price: '10,5k', spicyLevel: '10 Cabe', img: Mie_disko },
    { name: 'Lv.2', price: '11,5k', spicyLevel: '20 Cabe', img: Mie_disko },
    { name: 'Lv.3', price: '11,5k', spicyLevel: '30 Cabe', img: Mie_disko },
    { name: 'Lv.4', price: '12,5k', spicyLevel: '40 Cabe', img: Mie_disko },
    { name: 'Lv.5', price: '12,5k', spicyLevel: '50 Cabe', img: Mie_disko },
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
          <h2>Mie Disko</h2>
          <p>
            Mie pedas gurih dengan pilihan level 1-5:
            <br />
            Lv 1 = 10 Cabe &nbsp;&nbsp; Lv 2 = 20 Cabe &nbsp;&nbsp; Lv 3 = 30 Cabe
            <br />
            Lv 4 = 40 Cabe &nbsp;&nbsp; Lv 5 = 50 Cabe
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

export default MieDisko;