import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import '../style/UlasanAdmin.css';

const UlasanAdmin = () => {
  const [rating, setRating] = useState(4.9); // Default rating
  const [ulasanData, setUlasanData] = useState([
    {
      id: 1,
      user: 'Bunga Gayatri',
      rating: 5,
      comment: 'WizzBite itu tempat yang keren untuk makan! Suasana di sini cozy banget, bikin betah.',
      additionalComment: 'Makanan 5/5 | Layanan 5/5 | Tempat parkir: banyak tempat parkir.',
    },
  ]);
  const [newComment, setNewComment] = useState(''); // State untuk komentar baru

  // Fungsi untuk menghitung lebar garis biru
  const getFilledWidth = (index) => {
    const percentage = (rating / 5) * 100;
    return index <= Math.floor(rating - 1) ? '100%' : `${(rating % 1) * 100}%`;
  };

  // Fungsi untuk menghapus ulasan
  const handleDeleteUlasan = (id) => {
    setUlasanData(ulasanData.filter((ulasan) => ulasan.id !== id));
  };

  // Fungsi untuk mengirim komentar
  const handleSendComment = (id) => {
    const updatedUlasanData = ulasanData.map((ulasan) => {
      if (ulasan.id === id) {
        return { ...ulasan, adminComment: newComment };
      }
      return ulasan;
    });
    setUlasanData(updatedUlasanData);
    setNewComment(''); // Reset input komentar
  };

  return (
    <div className="dashboard-overview">
      <HeaderAdmin />
      <div className="content-container">
        <SidebarAdmin />
        <div className="main-content">
          <Container>
            <h2 className="text-center ulasan-title">Rating Pelanggan</h2>

            {/* Rating Toko Section */}
            <Row className="mb-4">
              <Col>
                <Card className="rating-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      {/* Bagian angka dan bintang */}
                      <Col xs={3} className="text-center">
                        <h3 className="rating-number">{rating.toFixed(1)}</h3>
                        <div className="rating-stars">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className={star <= rating ? 'active' : ''}>⭐</span>
                          ))}
                        </div>
                        <p className="rating-label">Rating Toko</p>
                      </Col>

                      {/* Bagian garis biru */}
                      <Col xs={9}>
                        {[1, 2, 3, 4, 5].map((line, index) => (
                          <div key={index} className="rating-line">
                            <div
                              className="rating-line-filled"
                              style={{ width: getFilledWidth(index) }}
                            />
                          </div>
                        ))}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Ulasan Section */}
            {ulasanData.map((ulasan) => (
              <Row key={ulasan.id} className="mb-4">
                <Col>
                  <Card className="ulasan-card">
                    <Card.Body>
                      <Row>
                        <Col md={12} className="d-flex justify-content-between">
                          <h5>{ulasan.user}</h5>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDeleteUlasan(ulasan.id)}
                          >
                            Hapus
                          </Button>
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col>
                          <p className="text-muted">Rating: {ulasan.rating} / 5</p>
                          <p>{ulasan.comment}</p>
                          <p className="text-muted">{ulasan.additionalComment}</p>
                          {ulasan.adminComment && (
                            <p className="admin-comment">
                              <strong>Admin:</strong> {ulasan.adminComment}
                            </p>
                          )}
                          <Form.Group className="mt-3">
                            <Form.Label>Beri Komentar:</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Tambahkan komentar..."
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                            />
                            <Button
                              className="mt-2"
                              variant="primary"
                              onClick={() => handleSendComment(ulasan.id)}
                            >
                              Kirim
                            </Button>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default UlasanAdmin;