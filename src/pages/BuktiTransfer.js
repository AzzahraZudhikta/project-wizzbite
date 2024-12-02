import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Image, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../style/BuktiTransfer.css';
import '../style/Sidebar.css';

function BuktiTransfer() {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate(); // Hook untuk navigasi menggunakan React Router

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Arahkan ke halaman TransferBank dengan status berhasil
    navigate('/TransferBank', { state: { success: true } });
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Navbar className="sidebar d-flex flex-column" style={{ width: '200px', overflowY: 'auto' }}>
        <Navbar.Brand className="sidebar-title text-center my-3">WizzBite</Navbar.Brand>
        <Nav className="nav flex-column w-100">
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
      <Container className="upload-container mt-4" style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
        <Row>
          <Col>
            <h4>Upload Bukti Transfer</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Pilih gambar dari perangkat Anda</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
              </Form.Group>

              {selectedImage && (
                <div className="image-preview mb-3">
                  <Image src={selectedImage} alt="Bukti Transfer" thumbnail />
                </div>
              )}

              <Button variant="primary" type="submit">
                Unggah Bukti
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BuktiTransfer;