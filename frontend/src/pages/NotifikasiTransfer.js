import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Modal, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import Link dan useNavigate untuk navigasi
import '../style/NotifikasiTransfer.css';
import '../style/Sidebar.css'; // Pastikan Anda memiliki CSS untuk gaya sidebar

function NotifikasiTransfer() {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate(); // Inisialisasi navigasi

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/Pesanan'); // Arahkan ke halaman Pesanan setelah modal ditutup
  };

  const handleShowModal = () => setShowModal(true);

  // Function to navigate to Rincian Pesanan
  const goToRincianPesanan = () => {
    navigate('/RincianPesanan'); // Navigasi ke halaman Rincian Pesanan
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

      {/* Main Content */}
      <Container className="konfirmasi-transfer-page" style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <h4 className="page-title">Transfer Bank</h4>
        <h5 className="section-title">Konfirmasi Transfer</h5>
        
        {/* Transfer Details */}
        <div className="transfer-details">
          <Row>
            <Col>
              <p>Tipe: Transfer Bank</p>
              <p>Bank: BRI</p>
              <p>Rekening: 1234 5678 9012</p>
              <p>Atas Nama: Nama Pemilik</p>
            </Col>
            <Col className="text-right">
              <p>Nominal:</p>
              <p className="nominal">Rp 83.000,00</p>
            </Col>
          </Row>

          {/* Upload Bukti Transfer */}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload bukti transfer</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Button variant="secondary" className="me-2">Batal</Button>
            <Button variant="primary" onClick={handleShowModal}>Ok</Button>
          </div>
        </div>

        {/* Modal Notifikasi Transfer */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Body className="notifikasi-transfer-body">
            <h5 className="text-center">Transaksi Berhasil!</h5>
            <p className="text-center">Silahkan cek pesanan Anda</p>
            <Button
              variant="secondary"
              className="view-order-button"
              onClick={goToRincianPesanan} // Navigasi ke RincianPesanan ketika tombol ini diklik
            >
              Rincian Pesanan
            </Button>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default NotifikasiTransfer;