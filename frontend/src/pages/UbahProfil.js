import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import '../style/UbahProfil.css';

const UbahProfil = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    // Fungsi untuk menangani unggahan gambar
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result); // Menyimpan URL gambar
            };
            reader.readAsDataURL(file);
        }
    };

    // Fungsi untuk menangani konfirmasi pilihan
    const handleConfirmSelection = () => {
        if (selectedImage) {
            alert('Gambar berhasil dipilih!');
            // Simulasi menyimpan data dan kembali ke halaman profil
            setTimeout(() => {
                navigate('/profil'); // Navigasi ke halaman profil
            }, 1000); // Delay 1 detik untuk memberikan waktu konfirmasi
        } else {
            alert('Silakan pilih gambar terlebih dahulu.');
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

            {/* Main Profile Section */}
            <Container className="ubah-profil-content">
                {/* Profile Header */}
                <Row className="profil-header justify-content-center">
                    <Col xs="auto" className="text-center">
                        <FaUserCircle className="profil-icon" size={80} />
                        <h5 className="change-profile-text">Ubah Profil</h5>
                    </Col>
                </Row>

                {/* Divider */}
                <hr className="divider" />

                {/* Upload Section */}
                <Row className="upload-section justify-content-center align-items-center">
                    <Col xs={12} md={6} className="text-center">
                        <h5>
                            Gambar
                        </h5>
                        <input
                            type="file"
                            accept="image/*"
                            className="form-control file-input mt-2"
                            onChange={handleFileUpload}
                        />
                        {selectedImage && (
                            <Button
                                variant="primary"
                                className="mt-3"
                                onClick={handleConfirmSelection}
                            >
                                Pilih
                            </Button>
                        )}
                    </Col>
                </Row>

                {/* Menampilkan gambar yang dipilih */}
                {selectedImage && (
                    <Row className="selected-image-section mt-4">
                        <Col className="text-center">
                            <h5>Gambar Terpilih:</h5>
                            <img src={selectedImage} alt="Selected" className="selected-img" />
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default UbahProfil;