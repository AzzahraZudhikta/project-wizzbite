import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Nav, Navbar, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import '../style/Keluar.css';

const Profil = () => {
    const [tampilkanModal, setTampilkanModal] = useState(false);

    // Fungsi untuk membuka modal konfirmasi
    const handleKlikKeluar = () => setTampilkanModal(true);

    // Fungsi untuk konfirmasi keluar
    const handleKonfirmasiKeluar = () => {
        setTampilkanModal(false);
        // Arahkan ke halaman utama di localhost:3000
        window.location.href = 'http://localhost:3000';
    };

    // Fungsi untuk batal keluar
    const handleBatalKeluar = () => setTampilkanModal(false);

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

            {/* Bagian Utama Profil */}
            <Container className="profil-content">
                {/* Header Profil */}
                <Row className="profil-header justify-content-center">
                    <Col xs="auto" className="text-center">
                        <FaUserCircle className="profil-icon" size={80} />
                        <h5 className="change-profile-text">
                            <Link to="/ubahprofil">Ubah Profil</Link>
                        </h5>
                    </Col>
                </Row>

                {/* Garis Pemisah */}
                <hr className="divider" />

                {/* Detail Profil */}
                <Card className="profil-card">
                    <Card.Body>
                        <Row className="profile-info">
                            <Col xs={6}>Nama</Col>
                            <Col xs={6} className="text-right">Bunga Gayati</Col>
                        </Row>
                        <Row className="profile-info">
                            <Col xs={6}>No. Handphone</Col>
                            <Col xs={6} className="text-right">089536214799</Col>
                        </Row>
                        <Row className="profile-info">
                            <Col xs={6}>Email</Col>
                            <Col xs={6} className="text-right">bunga123@gmail.com</Col>
                        </Row>
                    </Card.Body>

                    {/* Tombol Keluar */}
                    <Card.Body className="text-center">
                        <Button variant="danger" onClick={handleKlikKeluar}>
                            Keluar
                        </Button>
                    </Card.Body>
                </Card>

                {/* Modal Konfirmasi Keluar */}
                <Modal show={tampilkanModal} onHide={handleBatalKeluar} centered>
                    <Modal.Body className="text-center">
                        <p>Yakin untuk keluar?</p>
                        <Button variant="secondary" onClick={handleBatalKeluar} className="m-2">
                            Tidak
                        </Button>
                        <Button variant="danger" onClick={handleKonfirmasiKeluar} className="m-2">
                            Ya
                        </Button>
                    </Modal.Body>
                </Modal>

            </Container>
        </div>
    );
};

export default Profil;
