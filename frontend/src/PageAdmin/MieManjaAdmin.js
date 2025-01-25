import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import '../style/MieManjaAdmin.css';

// Import gambar untuk Mie Manja
import MieManja from '../Assets/Mie_manja.jpg';

const MieManjaAdmin = () => {
  const navigate = useNavigate();

  const handleDelete = (itemName) => {
    // Konfirmasi sebelum menghapus item
    const confirmDelete = window.confirm(`Apakah Anda yakin ingin menghapus item "${itemName}"?`);
    if (confirmDelete) {
      console.log(`Item "${itemName}" dihapus.`);
      // Tambahkan logika penghapusan item di sini, seperti memanggil API backend
    }
  };

  const handleEdit = (itemName) => {
    console.log(`Item "${itemName}" diedit.`);
    // Arahkan ke halaman edit dengan item yang dipilih
    navigate('/editlevelmiemanja');
  };

  return (
    <div className="mie-manja-container">
      <HeaderAdmin />
      <div className="mie-manja-content">
        <SidebarAdmin />
        <div className="main-section">
          <Container>
            <Row>
              <Col>
                <div className="header-section">
                  <h5>Mie Manja</h5>
                  <p>Mie original dengan bumbu spesial</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="menu-card">
                  <Card.Img
                    variant="top"
                    src={MieManja} // Gunakan gambar yang diimport
                    alt="Mie Manja"
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Ori</Card.Title>
                    <Card.Text>9,5k</Card.Text>
                    <div className="action-buttons d-flex justify-content-between">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleEdit('Ori')} // Edit item "Ori"
                      >
                        ✏ Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete('Ori')} // Hapus item "Ori"
                      >
                        🗑 Hapus
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MieManjaAdmin;
