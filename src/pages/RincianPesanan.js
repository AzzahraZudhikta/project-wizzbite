import React from 'react';
import { Container, Row, Col, Button, Table, Card, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Menggunakan React Router
import '../style/RincianPesanan.css'; // Menambahkan CSS khusus untuk styling

const RincianPesanan = () => {
    const orderDetails = [
        { name: 'Mie Goyang lv.3', quantity: 2, price: 23000 },
        { name: 'Classic Roll', quantity: 1, price: 12000 },
        { name: 'Udang Rambutan', quantity: 2, price: 20000 },
        { name: 'Ice Lemon Tea', quantity: 1, price: 7500 },
        { name: 'Milk Tea', quantity: 2, price: 21000 },
    ];

    // Menghitung total harga dengan mengalikan quantity dengan price
    const totalAmount = orderDetails.reduce((total, item) => total + (item.quantity * item.price), 0);

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

                {/* Konten Utama */}
                <Col xs={9} className="d-flex flex-column p-4">
                    <Card className="p-4 flex-grow-1">
                        <h2 className="text-center">Rincian Pesanan</h2>
                        <Table bordered hover className="my-3">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Qty</th>
                                    <th>Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price.toLocaleString()}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="2" className="font-weight-bold">Total</td>
                                    <td>{totalAmount.toLocaleString()}</td> {/* Total yang sudah dihitung */}
                                </tr>
                            </tbody>
                        </Table>

                        <div className="payment-info">
                            <Row>
                                <Col>Metode Pembayaran:</Col>
                                <Col className="text-end">Transfer bank</Col>
                            </Row>
                            <Row>
                                <Col>Atas nama:</Col>
                                <Col className="text-end">Bunga Gayati</Col>
                            </Row>
                        </div>

                        <div className="d-flex justify-content-between mt-4">
                            <Button variant="secondary" className="mx-1">Bagikan</Button>
                            <Button variant="primary" className="mx-1">Beranda</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RincianPesanan;