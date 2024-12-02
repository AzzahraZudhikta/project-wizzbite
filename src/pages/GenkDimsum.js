import React, { useState } from 'react';
import { Navbar, Nav, Card, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from "../ComponentsBeranda/Header"; // Pastikan path ini benar
import '../style/GenkDimsum.css';
import '../style/Sidebar.css';

// Impor gambar dari assets
import Siomay from '../Assets/Siomay.jpg';
import Pangsit_goreng from '../Assets/Pangsit_goreng.jpg';
import Udang_keju from '../Assets/Udang_keju.jpg';
import Udang_rambutan from '../Assets/Udang_rambutan.jpg';
import Lumpia_udang from '../Assets/Lumpia_udang.jpg';
import Ceker from '../Assets/Ceker.jpg';

const GenkDimsum = () => {
  const [queryPencarian, setQueryPencarian] = useState('');

  // Daftar menu dengan gambar yang sesuai
  const menuItems = [
    { name: 'Siomay', price: '10k', img: Siomay },
    { name: 'Pangsit Goreng', price: '10k', img: Pangsit_goreng },
    { name: 'Udang Keju', price: '10k', img: Udang_keju },
    { name: 'Udang Rambutan', price: '10k', img: Udang_rambutan },
    { name: 'Lumpia Udang', price: '10k', img: Lumpia_udang },
    { name: 'Ceker', price: '10k', img: Ceker },
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
        <Navbar className="Navbar d-flex flex-column" style={{ width: '200px', minHeight: '100vh' }}>
          <Nav className="Nav flex-column w-100">
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/Home" className="nav-link">🏠 Beranda</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/Pesanan" className="nav-link">🛒 Pesanan</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/Ulasan" className="nav-link">⭐ Ulasan</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>

        {/* Konten Utama */}
        <div className="genk-dimsum-container" style={{ padding: '20px', flex: 1, overflowY: 'auto', maxHeight: '90vh' }}>
          {/* Teks Selamat Datang */}
          <h2>Selamat Datang!</h2>

          {/* Teks Daftar Menu */}
          <h3>Daftar Menu Genk Dimsum</h3>

          {/* Kolom Pencarian */}
          <InputGroup className="mb-3 search-bar">
            <Form.Control
              placeholder="Cari GenkDimsum"
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

export default GenkDimsum;