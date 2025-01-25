import React from 'react';
import { Container, Row, Col, Button, Table, Card, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../style/RincianPesananDana.module.css';

const RincianPesananDana = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Data default jika tidak ada state dari navigasi
    const { pesanan = [], totalHarga = 0, metodePembayaran = 'Dana' } = location.state || {};

    const handleBack = () => {
        navigate('/pesanan'); // Navigasi ke halaman Pesanan
    };

    const handleConfirm = () => {
        alert('Pesanan berhasil dikonfirmasi!');
        navigate('/home'); // Navigasi ke halaman Home
    };

    return (
        <Container fluid className="bg-light vh-100 d-flex flex-column">
            <Row className="flex-grow-1">
                {/* Sidebar */}
                <Col xs={3} style={{ display: 'flex', flex: 1 }}>
                    <Navbar className="Navbar d-flex flex-column vh-100" style={{ width: '200px', backgroundColor: 'grey', color: 'white' }}>
                        <Nav className="Nav flex-column w-100">
                            <h2>WizzBite</h2>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/Home" className="nav-link">
                                    🏠 Beranda
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/Pesanan" className="nav-link">
                                    🛒 Pesanan
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/Ulasan" className="nav-link">
                                    ⭐ Ulasan
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </Col>

                {/* Konten Utama */}
                <Col xs={9} className="d-flex flex-column p-4">
                    <Card className="p-4 flex-grow-1">
                        <h2 className="text-center">Rincian Pesanan</h2>
                        <Table bordered hover className="my-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nama Item</th>
                                    <th>Jumlah</th>
                                    <th>Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pesanan.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.jumlah}</td>
                                        <td>Rp {item.harga.toLocaleString('id-ID')},00</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="3" className="font-weight-bold">
                                        Total
                                    </td>
                                    <td>Rp {totalHarga.toLocaleString('id-ID')},00</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className="payment-info">
                            <Row>
                                <Col>Metode Pembayaran:</Col>
                                <Col className="text-end">{metodePembayaran}</Col>
                            </Row>
                        </div>

                        <div className="d-flex justify-content-between mt-4">
                            <Button variant="secondary" className="mx-1" onClick={handleBack}>
                                Kembali
                            </Button>
                            <Button variant="primary" className="mx-1" onClick={handleConfirm}>
                                Konfirmasi Pesanan
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RincianPesananDana;
