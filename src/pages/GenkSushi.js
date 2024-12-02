import React, { useState } from 'react';
import { Navbar, Nav, Card, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from "../ComponentsBeranda/Header"; // Pastikan path ini benar
import '../style/GenkSushi.css';
import '../style/Sidebar.css';

// Impor gambar dari assets
import Classic_Roll from '../Assets/Classic_roll.jpg';
import Retro_roll from '../Assets/Retro_roll.jpg';
import Hip_roll from '../Assets/Hip_roll.jpg';
import Rock_n_roll from '../Assets/Rock_n_roll.jpg';
import Ebi_furai from '../Assets/Ebi_furai.jpg';
import Electric_roll from '../Assets/Electric_roll.jpg';

const GenkSushi = () => {
  const [queryPencarian, setQueryPencarian] = useState('');

  // Data menu
  const menuItems = [
    { name: 'Classic Roll', price: '12k', img: Classic_Roll },
    { name: 'Retro Roll', price: '12k', img: Retro_roll },
    { name: 'Hip & Roll', price: '12k', img: Hip_roll },
    { name: 'Rock & Roll', price: '12k', img: Rock_n_roll },
    { name: 'Ebi Furai', price: '12k', img: Ebi_furai },
    { name: 'Electric Roll', price: '12k', img: Electric_roll }
  ];

  // Filter menu berdasarkan pencarian
  const itemsTersaring = menuItems.filter(item =>
    item.name.toLowerCase().includes(queryPencarian.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <Header />

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <Navbar className="Navbar d-flex flex-column" style={{ width: '200px', minHeight: '100vh' }}>
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
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          {/* Teks Selamat Datang */}
          <h2>Selamat Datang!</h2>

          {/* Teks Daftar Menu */}
          <h3>Daftar Menu Genk Sushi</h3>

          {/* Kolom Pencarian */}
          <InputGroup className="mb-3 search-bar">
            <Form.Control
              placeholder="Cari Genk Sushi"
              value={queryPencarian}
              onChange={(e) => setQueryPencarian(e.target.value)}
            />
          </InputGroup>

          {/* Daftar Item Menu */}
          <div className="menu-item-container">
            {itemsTersaring.length > 0 ? (
              itemsTersaring.map((item, index) => (
                <Card key={index} className="menu-card mb-3">
                  <Card.Img variant="top" src={item.img} alt={item.name} />
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Card.Title>{item.name}</Card.Title>
                        <span className="text-muted">{item.price}</span>
                      </div>
                      <Button variant="outline-primary" size="sm">🛒</Button>
                    </div>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p className="no-results">Tidak ada hasil untuk "{queryPencarian}"</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenkSushi;