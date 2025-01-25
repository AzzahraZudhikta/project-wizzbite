import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa'; // Import ikon centang
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';

const EditLevelMieDisko = () => {
  const navigate = useNavigate();
  const [levelName, setLevelName] = useState(''); // Nilai awal kosong
  const [price, setPrice] = useState(''); // Nilai awal kosong
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (!levelName.trim() || !price.trim()) {
      alert('Level dan harga tidak boleh kosong!');
      return;
    }

    setIsSaved(true); // Mengubah status setelah tombol simpan diklik

    // Menampilkan notifikasi setelah tindakan simpan
    setTimeout(() => {
      alert('Level berhasil disimpan!');
      navigate('/MieDiskoAdmin'); // Arahkan ke MieDiskoAdmin setelah disimpan
    }, 1000); // Penundaan sebelum redirect
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#ffffff' }}>
      {/* Header */}
      <HeaderAdmin />
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <SidebarAdmin />
        <div
          style={{
            flex: 1,
            backgroundColor: '#ffffff', // Background putih
            borderRadius: '10px',
            padding: '40px',
            margin: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Bayangan untuk estetika
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
                  Edit Level
                </h2>

                {/* Formulir */}
                <Form style={{ maxWidth: '600px', margin: '0 auto' }}>
                  <Form.Group controlId="formLevelName" className="mb-4">
                    <Form.Label>Level</Form.Label>
                    <Form.Control
                      type="text"
                      value={levelName}
                      onChange={(e) => setLevelName(e.target.value)}
                      placeholder="Masukkan level"
                      style={{
                        border: 'none',
                        borderBottom: '2px solid #000',
                        borderRadius: 0,
                        boxShadow: 'none',
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPrice" className="mb-4">
                    <Form.Label>Harga</Form.Label>
                    <Form.Control
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Masukkan harga"
                      style={{
                        border: 'none',
                        borderBottom: '2px solid #000',
                        borderRadius: 0,
                        boxShadow: 'none',
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="success"
                    onClick={handleSave}
                    disabled={isSaved}
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      width: '150px',
                      backgroundColor: '#28a745', // Warna tombol hijau
                      border: 'none',
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = '#218838') // Hover
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = '#28a745') // Normal
                    }
                  >
                    {isSaved ? <FaCheck style={{ color: 'white' }} /> : 'Simpan'}
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

export default EditLevelMieDisko;
