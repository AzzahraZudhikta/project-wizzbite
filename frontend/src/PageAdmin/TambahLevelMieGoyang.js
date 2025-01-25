import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';

const TambahLevelMieGoyangAdmin = () => {
  // State untuk menyimpan input level dan jumlah cabe
  const [levelName, setLevelName] = useState('');
  const [spiceLevel, setSpiceLevel] = useState('');

  // Fungsi untuk menangani penyimpanan data
  const handleSimpan = () => {
    if (!levelName || !spiceLevel) {
      alert('Mohon lengkapi semua data sebelum menyimpan!');
      return;
    }

    // Data yang akan disimpan
    const newLevel = {
      levelName: levelName,
      spiceLevel: spiceLevel,
    };

    // Simulasi penyimpanan (misalnya ke database)
    console.log('Data disimpan:', newLevel);
    alert('Level berhasil disimpan!');

    // Reset form
    setLevelName('');
    setSpiceLevel('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#ffffff', // Full background putih
      }}
    >
      {/* Header Admin */}
      <HeaderAdmin />

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar Admin */}
        <SidebarAdmin />

        {/* Form untuk menambah level */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            margin: '20px',
          }}
        >
          <Container>
            <Row>
              <Col>
                <h2
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                  }}
                >
                  Tambah Level
                </h2>
                <Form style={{ maxWidth: '600px', margin: '0 auto' }}>
                  <Form.Group controlId="formLevelName" className="mb-4">
                    <Form.Label>Tambah Level</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan level"
                      value={levelName}
                      onChange={(e) => setLevelName(e.target.value)}
                      style={{
                        border: 'none',
                        borderBottom: '2px solid #000',
                        borderRadius: 0,
                        boxShadow: 'none',
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formLevelSpice" className="mb-4">
                    <Form.Label>Tambah Cabe</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan jumlah cabe"
                      value={spiceLevel}
                      onChange={(e) => setSpiceLevel(e.target.value)}
                      style={{
                        border: 'none',
                        borderBottom: '2px solid #000',
                        borderRadius: 0,
                        boxShadow: 'none',
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="secondary"
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      width: '150px',
                      backgroundColor: '#808080',
                      border: 'none',
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = '#6e6e6e') // Hover
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = '#808080') // Normal
                    }
                    onClick={handleSimpan}
                  >
                    Simpan
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TambahLevelMieGoyangAdmin;
