import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/LihatPenilaian.css';

function LihatPenilaian() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      username: 'Bunga Gayati',
      date: 'Seminggu yang lalu',
      rating: 5,
      review: 'Nyoba mie goyang wizzme level 3, rasanya enak bangettttt, apalagi udang keju dan rambutanya enak poll, likeee bangetss pokoknya. Untuk pelayanan cepat dan satset banget. Tempat bersih.',
      images: ['', ''], // Tempat gambar ulasan (kosong untuk sementara)
      foodRating: 5,
      serviceRating: 5,
    },
  ]);

  // Fungsi hapus ulasan
  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
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

        {/* User Reviews */}
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <Card className="user-review" key={review.id}>
              <Card.Body>
                <Row>
                  {/* Bagian Profil Pengguna */}
                  <Col xs={3} className="text-center">
                    <div className="user-icon">👤</div>
                    <p className="username">{review.username}</p>
                    <p className="review-date text-muted">{review.date}</p>
                  </Col>

                  {/* Bagian Isi Ulasan */}
                  <Col xs={9}>
                    <div className="user-rating">
                      {'⭐'.repeat(review.rating)}
                    </div>
                    <p>{review.review}</p>
                    <p><strong>Makanan: {review.foodRating} | Layanan: {review.serviceRating}</strong></p>
                    <div className="review-images">
                      {review.images.map((img, index) => (
                        <div key={index} className="review-img"></div>
                      ))}
                    </div>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(review.id)}
                    >
                      Hapus
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Tidak ada ulasan tersedia.</p>
        )}
      </Container>
    </div>
  );
}

export default LihatPenilaian;