import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../style/Dana.css';

const Dana = () => {
  const [nomorHP, setNomorHP] = useState('');
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleLanjutkan = () => {
    if (nomorHP) {
      alert('Nomor HP ${nomorHP} telah dimasukkan sebagai ID Dana.');
      navigate('/KodePin'); // Navigasi ke halaman KodePin
    } else {
      alert('Harap masukkan nomor HP.');
    }
  };

  return (
    <Container fluid className="bg-light vh-100 d-flex flex-column">
      <Row className="flex-grow-1">
        {/* Sidebar */}
        <Col xs={3} className="bg-secondary text-white p-3" style={{ overflowY: 'auto' }}>
          <h2>WizzBite</h2>
          <Nav className="flex-column">
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/Home" className="nav-link text-white">🏠 Beranda</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/Pesanan" className="nav-link text-white">🛒 Pesanan</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/Ulasan" className="nav-link text-white">⭐ Ulasan</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Konten utama */}
        <Col xs={9} className="p-4" style={{ overflowY: 'auto' }}>
          <Card>
            <Card.Body>
              <Card.Title>Masukkan Nomor HP sebagai ID Dana</Card.Title>
              <Form>
                <Form.Group controlId="nomorHP">
                  <Form.Label>Nomor HP</Form.Label>
                  <Row>
                    <Col md={2}>
                      <Form.Control type="text" placeholder="+62" disabled />
                    </Col>
                    <Col md={10}>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nomor HP"
                        value={nomorHP}
                        onChange={(e) => setNomorHP(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
              <Button className="mt-3" onClick={handleLanjutkan}>
                Lanjutkan
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dana;