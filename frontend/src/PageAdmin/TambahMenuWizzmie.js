import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';

const TambahMenuWizzmie = () => {
  const [namaMenu, setNamaMenu] = useState('');
  const [gambarMenu, setGambarMenu] = useState(null);

  const handleUnggahGambar = (e) => {
    const file = e.target.files[0];
    setGambarMenu(file);
  };

  const handleSimpan = () => {
    if (namaMenu && gambarMenu) {
      console.log('Nama Menu:', namaMenu);
      console.log('Gambar Menu:', gambarMenu.name);
      alert('Menu berhasil ditambahkan!');
      setNamaMenu('');
      setGambarMenu(null);
    } else {
      alert('Harap isi nama dan tambahkan gambar!');
    }
  };

  return (
    <div className="tambah-menu-container">
      <HeaderAdmin />
      <div className="tambah-menu-content">
        <SidebarAdmin />
        <div className="main-section">
          <Container>
            <Row>
              <Col>
                <h4 className="text-center tambah-menu-title">Tambah Menu</h4>
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Col xs={12} sm={6}>
                <Card className="text-center p-3">
                  <div className="image-upload-section mb-3">
                    <label htmlFor="menu-image" className="upload-placeholder">
                      {gambarMenu ? (
                        <img
                          src={URL.createObjectURL(gambarMenu)}
                          alt="Menu Preview"
                          className="uploaded-image"
                        />
                      ) : (
                        <span>+</span>
                      )}
                    </label>
                    <input
                      type="file"
                      id="menu-image"
                      accept="image/*"
                      onChange={handleUnggahGambar}
                      style={{ display: 'none' }}
                    />
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan nama menu"
                      value={namaMenu}
                      onChange={(e) => setNamaMenu(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleSimpan}>
                    Simpan
                  </Button>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TambahMenuWizzmie;

// Gaya CSS langsung
const styles = `
.tambah-menu-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.tambah-menu-container .tambah-menu-content {
  display: flex;
  flex: 1;
}

.tambah-menu-container .main-section {
  flex: 1;
  padding: 20px;
}

.tambah-menu-container .image-upload-section {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #ccc;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
}

.tambah-menu-container .image-upload-section span {
  font-size: 24px;
  color: #999;
}

.tambah-menu-container .uploaded-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tambah-menu-container .upload-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.tambah-menu-container button {
  width: 100%;
}

.tambah-menu-container .tambah-menu-title {
  font-weight: bold;
  font-size: 2.0rem; /* Sedikit lebih besar */
}
`;

// Menambahkan CSS ke dalam dokumen
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
