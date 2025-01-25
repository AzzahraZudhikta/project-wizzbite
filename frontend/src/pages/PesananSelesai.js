import React from 'react';
import { Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/PesananSelesai.css';

// Import gambar ulasan
import ulasan from '../Assets/Ulasan.jpg';

// Contoh data pesanan
const pesananData = [
  {
    title: "Pesanan hari ini",
    items: "Mie goyang lv.3, Udang Rambutan, Ice Lemon Tea, Milk Tea",
    total: "Total 6 pesanan: Rp61.000",
    image: ulasan, // Gunakan gambar impor
    buttonLabel: "Beri Ulasan"
  },
  {
    title: "Pesanan minggu lalu",
    items: "Mie Goyang lv.3, Classic Roll, Udang Rambutan, Ice Lemon Tea",
    total: "Total 4 pesanan: Rp83.500",
    image: ulasan, // Gunakan gambar impor
    buttonLabel: "Lihat Penilaian"
  },
  {
    title: "Pesanan 2 bulan yang lalu",
    items: "Mie Goyang lv.3, Classic Roll, Udang Rambutan, Ice Lemon Tea, Milk Tea",
    total: "Total 5 pesanan: Rp83.500",
    image: ulasan, // Gunakan gambar impor
    buttonLabel: "Selesai"
  }
];

function PesananSelesai() {
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
            <Nav.Link as={Link} to="/Ulasan">⭐ Ulasan</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      {/* Main Content */}
      <Container className="main-content">
        <h4 className="welcome-text">Selamat Datang!</h4>

        {/* Informasi Pengguna */}
        <div className="user-info my-3 p-3" style={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <Row>
            <Col xs={2} className="text-center">
              <div
                className="user-avatar"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#ccc',
                  borderRadius: '50%'
                }}
              ></div>
            </Col>
            <Col xs={10}>
              <p className="mb-0" style={{ fontWeight: 'bold' }}>Bunga Gayatri</p>
              <p className="text-muted">Memposting untuk publik di WizzBite</p>
            </Col>
          </Row>
        </div>

        {/* Pesanan Card */}
        {pesananData.map((pesanan, index) => (
          <Card className="pesanan-card my-3" key={index}>
            <Card.Body>
              <Row>
                <Col xs={3} className="text-center">
                  <img
                    src={pesanan.image}
                    alt={`Gambar untuk ${pesanan.title}`}
                    className="img-fluid"
                    style={{
                      width: "120px",  // Perbesar lebar gambar
                      height: "auto", // Sesuaikan tinggi gambar secara proporsional
                      objectFit: "cover" // Pastikan gambar tetap proporsional dalam kotak
                    }}
                  />
                </Col>
                <Col xs={9}>
                  <h6>{pesanan.title}</h6>
                  <p>{pesanan.items}</p>
                  <p className="text-muted">{pesanan.total}</p>
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/${pesanan.buttonLabel.replace(/\s/g, "")}`} // Hapus spasi dari buttonLabel
                  >
                    {pesanan.buttonLabel}
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default PesananSelesai;
