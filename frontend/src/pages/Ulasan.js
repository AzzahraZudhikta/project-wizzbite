import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Ulasan.css';

function Ulasan() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(4.9); // Rating default yang diberikan

  const handleRating = (value) => {
    setRating(value); // Set rating berdasarkan klik
    setTimeout(() => navigate('/PesananSelesai'), 300); // Navigasi ke halaman Pesanan
  };

  // Fungsi untuk menghitung lebar garis terisi sesuai dengan rating
  const getFilledWidth = (lineIndex) => {
    const filledWidth = (rating / 5) * 100;
    return lineIndex < filledWidth / 20 ? '100%' : '0%'; // Menghitung lebar tiap garis berdasarkan rating
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Navbar className="sidebar d-flex flex-column">
        <Navbar.Brand className="sidebar-title text-center my-4">WizzBite</Navbar.Brand>
        <Nav className="nav flex-column w-100">
          <Nav.Item>
            <Nav.Link as={Link} to="/Home">🏠 Beranda</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Pesanan">🛒 Pesanan</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Ulasan" active>⭐ Ulasan</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      {/* Main Content */}
      <Container className="main-content">
        <h4 className="welcome-text">Selamat Datang!</h4>

        {/* Rating Summary */}
        <div className="rating-summary">
          <div>
            <h1 className="rating-score">{rating}</h1>

            {/* 5 Bintang */}
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? 'active' : ''}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>

          {/* 5 Garis Progress (disusun vertikal di samping rating) */}
          <div className="rating-lines">
            {[1, 2, 3, 4, 5].map((line, index) => (
              <div key={index} className="rating-line">
                <div
                  className="rating-line-filled"
                  style={{ width: getFilledWidth(index + 1) }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Add Review */}
        <div className="add-review">
          <h5>Beri rating dan ulasan</h5>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? 'active' : ''}
                onClick={() => handleRating(star)}
              >
                ⭐
              </span>
            ))}
          </div>
        </div>

        {/* User Review */}
        <Card className="user-review">
          <Card.Body>
            <Row>
              {/* Bagian Profil Pengguna */}
              <Col xs={3} className="text-center">
                <div className="user-icon">👤</div>
                <p className="username">Aizum</p>
                <p className="review-date text-muted">Seminggu yang lalu</p>
              </Col>

              {/* Bagian Isi Ulasan */}
              <Col xs={9}>
                <div className="user-rating">⭐⭐⭐⭐⭐</div>
                <p>
                  Nyoba mie goyang wizzme level 2, untuk rasa enak dan pedes tapi masih aman. 
                  Udang keju dan rambutanya enak banget, likeee bangetss pokoknya. Untuk pelayanan 
                  cepat dan satset banget. Tempat bersih.
                </p>
                <p><strong>Makanan: 5 | Layanan: 5</strong></p>
                <div className="review-images">
                  <div className="review-img"></div>
                  <div className="review-img"></div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Ulasan;