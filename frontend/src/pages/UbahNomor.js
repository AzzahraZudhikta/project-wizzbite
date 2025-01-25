import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const UbahNomor = () => {
    const [nomorTelepon, setNomorTelepon] = useState('');
    const navigate = useNavigate();

    const handleSave = () => {
        if (nomorTelepon) {
            localStorage.setItem('nomorTelepon', nomorTelepon);
            alert('Nomor telepon berhasil diperbarui');
            navigate('/profil');
        } else {
            alert('Silakan masukkan nomor telepon');
        }
    };

    return (
        <div className="profil-page">
            {/* Sidebar */}
            <Navbar className="sidebar">
                <Navbar.Brand className="sidebar-logo">WizzBite</Navbar.Brand>
                <Nav className="flex-column nav-links">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/home">🏠 Beranda</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/pesanan">🛒 Pesanan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/ulasan">⭐ Ulasan</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>

            {/* Main Content */}
            <Container className="ubah-profil-content">
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <h5>Ubah No Handphone</h5>
                        <Form.Group>
                            <Form.Label>No. Handphone</Form.Label>
                            <Form.Control
                                type="text"
                                value={nomorTelepon}
                                onChange={(e) => setNomorTelepon(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSave} className="mt-3">
                            Simpan
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UbahNomor;