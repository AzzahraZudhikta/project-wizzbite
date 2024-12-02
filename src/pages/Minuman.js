import React, { useState } from 'react';
import { Navbar, Nav, Card, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from "../ComponentsBeranda/Header"; // Pastikan path ini benar
import '../style/Minuman.css';
import '../style/Sidebar.css';

// Impor gambar dari assets
import Ice_dj from '../Assets/Ice_dj.jpg';
import Ice_reggae from '../Assets/Ice_reggae.jpg';
import Ice_funky from '../Assets/Ice_funky.jpg';
import Green_tea from '../Assets/Green_tea.jpg';
import Ice_lemon_tea from '../Assets/Ice_lemon_tea.jpg';
import Ice_tea from '../Assets/Ice_tea.jpg';
import Matcha_latte from '../Assets/Matcha_latte.jpg';
import Milk_tea from '../Assets/Milk_tea.jpg';
import Red_velvet from '../Assets/Red_velvet.jpg';

const Minuman = () => {
  const [queryPencarian, setQueryPencarian] = useState('');

  // Daftar menu dengan gambar
  const menuItems = [
    { name: 'Ice DJ', price: '12K', img: Ice_dj },
    { name: 'Ice Reggae', price: '11K', img: Ice_reggae },
    { name: 'Ice Funky', price: '9.5K', img: Ice_funky },
    { name: 'Green Tea', price: '12.5K', img: Green_tea },
    { name: 'Ice Lemon Tea', price: '7.5K', img: Ice_lemon_tea },
    { name: 'Ice Tea', price: '7K', img: Ice_tea },
    { name: 'Matcha Latte', price: '12.5K', img: Matcha_latte },
    { name: 'Milk Tea', price: '10.5K', img: Milk_tea },
    { name: 'Red Velvet', price: '13K', img: Red_velvet },
  ];

  const itemsTersaring = menuItems.filter(item =>
    item.name.toLowerCase().includes(queryPencarian.toLowerCase())
  );

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

        {/* Konten Utama */}
        <div className="minuman-container" style={{ padding: '20px', flex: 1, maxHeight: '90vh' }}>
          <h2>Selamat Datang!</h2>
          <h3>Daftar Menu Minuman</h3>

          {/* Kolom Pencarian */}
          <InputGroup className="mb-3 search-bar">
            <Form.Control
              placeholder="Cari Minuman"
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
                      <Button variant="outline-primary" size="sm" style={{ fontSize: '1.5rem' }}>🛒</Button>
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

export default Minuman;