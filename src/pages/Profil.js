import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import '../style/Profil.css';

const Profil = () => {
    const navigate = useNavigate();

    // State untuk data profil
    const [profil, setProfil] = useState({
        nama: 'Bunga Gayati',
        nomorTelepon: '089536214799',
        email: 'bunga123@gmail.com'
    });

    // Mengambil data dari localStorage saat pertama kali komponen dirender
    useEffect(() => {
        const storedNama = localStorage.getItem('nama');
        const storedNomorTelepon = localStorage.getItem('nomorTelepon');
        const storedEmail = localStorage.getItem('email');

        setProfil({
            nama: storedNama || 'Bunga Gayati',
            nomorTelepon: storedNomorTelepon || '089536214799',
            email: storedEmail || 'bunga123@gmail.com'
        });
    }, []);

    // Fungsi untuk menangani klik tombol keluar
    const handleKeluar = () => {
        // Anda bisa menambahkan logika untuk membersihkan session atau localStorage di sini
        navigate('/keluar'); // Mengarahkan ke halaman keluar
    };

    return (
        <div className="profil-page">
            {/* Sidebar */}
            <Navbar className="sidebar">
                <Navbar.Brand className="sidebar-logo">WizzBite</Navbar.Brand>
                <Nav className="flex-column nav-links">
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

            {/* Main Profile Section */}
            <Container className="profil-content">
                {/* Profile Header */}
                <Row className="profil-header justify-content-center">
                    <Col xs="auto" className="text-center">
                        <FaUserCircle className="profil-icon" size={80} />
                        <h5 className="change-profile-text">
                            <Link to="/UbahProfil">Ubah Profil</Link>
                        </h5>
                    </Col>
                </Row>

                {/* Divider */}
                <hr className="divider" />

                {/* Profile Details */}
                <Card className="profil-card">
                    <Card.Body>
                        <Row className="profile-info">
                            <Col xs={6}>Nama</Col>
                            <Col xs={6} className="text-right">{profil.nama}</Col>
                        </Row>
                        <Row className="profile-info">
                            <Col xs={6}>No. Handphone</Col>
                            <Col xs={6} className="text-right">
                                <Link to="/UbahNomor">{profil.nomorTelepon}</Link>
                            </Col>
                        </Row>
                        <Row className="profile-info">
                            <Col xs={6}>Email</Col>
                            <Col xs={6} className="text-right">{profil.email}</Col>
                        </Row>
                    </Card.Body>

                    {/* Log Out Button */}
                    <Card.Body className="text-center">
                        <Button variant="danger" onClick={handleKeluar}>
                            Keluar
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Profil;