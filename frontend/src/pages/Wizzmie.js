import React, { useState } from 'react';
import { Navbar, Nav, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from "../ComponentsBeranda/Header"; // Pastikan path ini sesuai dengan lokasi Header.js Anda
import '../style/Wizzmie.css';
import '../style/Sidebar.css';

// Impor gambar dari assets
import Mie_disko from '../Assets/Mie_disko.jpg';
import Mie_goyang from '../Assets/Mie_goyang.jpg';
import Mie_manja from '../Assets/Mie_manja.jpg';

const Wizzmie = () => {
  const navigate = useNavigate();
  const [queryPencarian, setQueryPencarian] = useState('');
  
  // Data kartu dan path navigasi
  const cardData = [
    { title: 'Mie Goyang', path: '/MieGoyang', img: Mie_goyang },
    { title: 'Mie Disko', path: '/MieDisko', img: Mie_disko },
    { title: 'Mie Manja', path: '/MieManja', img: Mie_manja },
  ];

  // Penyaringan menu berdasarkan query pencarian
  const itemsTersaring = cardData.filter(item =>
    item.title.toLowerCase().includes(queryPencarian.toLowerCase())
  );

  // Fungsi untuk navigasi saat kartu diklik
  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <Header />

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <Navbar className="Navbar d-flex flex-column vh-100" style={{ width: '200px' }}>
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

        {/* Main Content */}
        <div className="wizzmie-container" style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
          {/* Teks Selamat Datang */}
          <h2>Selamat Datang!</h2>

          {/* Teks Daftar Menu WizzMie */}
          <h3>Daftar Menu WizzMie</h3>

          {/* Kolom Pencarian */}
          <InputGroup className="search-bar mb-3">
            <Form.Control
              placeholder="Cari Wizzmie"
              value={queryPencarian}
              onChange={(e) => setQueryPencarian(e.target.value)}
            />
          </InputGroup>

          {/* Daftar Item Menu */}
          <div className="menu-item-container">
            {itemsTersaring.length > 0 ? (
              itemsTersaring.map((item, index) => (
                <Card key={index} className="menu-card" onClick={() => handleCardClick(item.path)}>
                  <Card.Img variant="top" src={item.img} alt={item.title} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
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

export default Wizzmie;