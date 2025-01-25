import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../style/ProfilAdmin.css';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';

const ProfilAdmin = () => {
    const navigate = useNavigate(); // Hook untuk navigasi

    // State untuk data profil
    const [profil, setProfil] = useState({
        nama: 'Riko Sadewa',
        nomorTelepon: '1234567890',
        tanggalLahir: '5 Maret 2003',
        jenisKelamin: 'Laki-laki',
        alamat: 'Solo',
        email: 'rikowizzmie20@gmail.com',
        fotoProfil: '', // Menyimpan URL foto profil
    });

    const [isEditing, setIsEditing] = useState(false); // Mengatur mode edit

    // Mengambil data dari localStorage saat pertama kali komponen dirender
    useEffect(() => {
        const storedProfil = JSON.parse(localStorage.getItem('profil'));
        if (storedProfil) {
            setProfil(storedProfil);
        }
    }, []);

    // Menyimpan perubahan ke localStorage
    const handleSave = () => {
        localStorage.setItem('profil', JSON.stringify(profil));
        setIsEditing(false);
        navigate('/HomeAdmin'); // Navigasi ke HomeAdmin
    };

    // Mengubah foto profil
    const handleFotoProfilChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfil({ ...profil, fotoProfil: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="dashboard-container">
            <HeaderAdmin />
            <div className="dashboard-content">
                <SidebarAdmin />

                {/* Main Content */}
                <Container className="profil-content" style={{ maxWidth: '800px' }}>
                    <h2 className="profil-title">Profil</h2>

                    {/* Logo Profil */}
                    <div className="profil-logo" style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img
                            src={profil.fotoProfil || 'https://via.placeholder.com/100'}
                            alt="Profil"
                            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                        />
                        {isEditing && (
                            <Form.Group className="mt-3">
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFotoProfilChange}
                                />
                            </Form.Group>
                        )}
                    </div>

                    {/* Form Profil */}
                    <form className="profil-form">
                        <Row className="form-group">
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={profil.nama}
                                    readOnly={!isEditing}
                                    onChange={(e) => setProfil({ ...profil, nama: e.target.value })}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={profil.nomorTelepon}
                                    readOnly={!isEditing}
                                    onChange={(e) =>
                                        setProfil({ ...profil, nomorTelepon: e.target.value })
                                    }
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={profil.tanggalLahir}
                                    readOnly={!isEditing}
                                    onChange={(e) =>
                                        setProfil({ ...profil, tanggalLahir: e.target.value })
                                    }
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={profil.jenisKelamin}
                                    readOnly={!isEditing}
                                    onChange={(e) =>
                                        setProfil({ ...profil, jenisKelamin: e.target.value })
                                    }
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={profil.alamat}
                                    readOnly={!isEditing}
                                    onChange={(e) => setProfil({ ...profil, alamat: e.target.value })}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={profil.email}
                                    readOnly={!isEditing}
                                    onChange={(e) => setProfil({ ...profil, email: e.target.value })}
                                />
                            </Col>
                        </Row>

                        {/* Tombol Edit dan Selesai */}
                        <Row className="form-group text-center">
                            <Col>
                                <Button variant="primary" onClick={handleSave}>
                                    Selesai
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default ProfilAdmin;