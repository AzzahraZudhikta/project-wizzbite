import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/TransferBank.css';
import '../style/Sidebar.css';

function TransferBank() {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalHarga = 83000 } = location.state || {}; // Menetapkan default totalHarga
  const [isUploaded, setIsUploaded] = useState(false);

  // Fungsi untuk menuju ke halaman BuktiTransfer
  const handleUploadClick = () => {
    navigate('/BuktiTransfer', { state: { totalHarga } }); // Navigasi ke halaman BuktiTransfer
  };

  const handleCancel = () => {
    navigate('/Pesanan'); // Navigasi kembali ke halaman Pesanan jika dibatalkan
  };

  const handleConfirm = () => {
    // Navigasi ke halaman NotifikasiTransfer
    navigate('/NotifikasiTransfer');
  };

  return (
    <Container fluid className="bg-light vh-100 d-flex flex-column">
      <Row className="flex-grow-1">
        {/* Sidebar */}
        <Col xs={3} style={{ display: 'flex', flex: 1 }}>
          <Navbar className="Navbar d-flex flex-column vh-100" style={{ width: '200px', backgroundColor: 'grey', color: 'white' }}>
            <Nav className="Nav flex-column w-100">
              <h2>WizzBite</h2>
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
        </Col>

        <Col xs={9} className="p-4" style={{ overflowY: 'auto' }}>
          <h3 className="mt-4">Selamat Datang!</h3>
          <h5>Transfer Bank</h5>
          <Button variant="link" onClick={handleCancel} className="mb-3 back-button">← Konfirmasi Transfer</Button>
          <div className="confirmation-details p-3 mt-3 border rounded">
            <p>Tipe Transaksi: <strong>Transfer</strong></p>
            <p>Bank Tujuan: <strong>BANK BRI</strong></p>
            <p>Rekening Tujuan: <strong>239088442213</strong></p>
            <p>Pemilik Rekening: <strong>WizzMie</strong></p>
            <p>Nominal: <strong>Rp. {totalHarga.toLocaleString('id-ID')},00</strong></p>
          </div>

          <Button variant="secondary" className="mt-3 upload-button" onClick={handleUploadClick}>
            {isUploaded ? "Bukti transfer telah diupload" : "Upload bukti transfer"}
          </Button>

          <Row className="mt-4 justify-content-between">
            <Col xs="auto">
              <Button variant="outline-secondary" onClick={handleCancel}>Batal</Button>
            </Col>
            <Col xs="auto">
              <Button variant="primary" onClick={handleConfirm}>Ok</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TransferBank;