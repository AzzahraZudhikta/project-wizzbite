import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import '../style/MieDiskoAdmin.css';

// Import gambar untuk Mie Disko
import MieDisko from '../Assets/Mie_disko.jpg';

const MieDiskoAdmin = () => {
  const navigate = useNavigate();

  const [levels, setLevels] = useState([
    { level: 'Lv 1', price: '10,5k', img: MieDisko },
    { level: 'Lv 2', price: '11,5k', img: MieDisko },
    { level: 'Lv 3', price: '11,5k', img: MieDisko },
    { level: 'Lv 4', price: '12,5k', img: MieDisko },
    { level: 'Lv 5', price: '12,5k', img: MieDisko },
    { level: 'Lv 6', price: '13k', img: MieDisko },
  ]);

  // Function to handle level deletion
  const handleDelete = (levelToDelete) => {
    setLevels(levels.filter((item) => item.level !== levelToDelete));
  };

  return (
    <div className="mie-disko-container">
      <HeaderAdmin />
      <div className="mie-disko-content">
        <SidebarAdmin />
        <div className="main-section">
          <Container>
            <Row>
              <Col>
                <div className="header-section">
                  <h5>Mie Disko</h5>
                  <p>Mie pedas gurih dengan pilihan level 1-6</p>
                  <p>
                    Lv 1 = 10 Cabe | Lv 2 = 20 Cabe | Lv 3 = 30 Cabe | Lv 4 = 40 Cabe | Lv 5 = 35 Cabe | Lv 6 = 50 Cabe
                  </p>
                  <div className="button-container">
                    <Button
                      variant="primary"
                      className="add-level-btn"
                      onClick={() => navigate('/tambahlevelmiedisko')} // Navigasi ke Tambah Level
                    >
                      + Tambah Level
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="level-cards">
              {levels.map((item, index) => (
                <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                  <Card className="level-card">
                    <Card.Img
                      variant="top"
                      src={item.img} // Gunakan properti img untuk gambar level
                      alt={`Level ${item.level}`}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">{item.level}</Card.Title>
                      <Card.Text className="text-center">{item.price}</Card.Text>
                      <div className="action-buttons">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => navigate('/editlevelmiedisko')} // Navigasi ke EditLevel
                        >
                          ✏ Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(item.level)} // Hapus level saat diklik
                        >
                          🗑 Hapus
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MieDiskoAdmin;
