import React, { useState } from 'react';
import '../style/Pesanan.css';
import { Container, Row, Col, Button, Form, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

// Impor gambar
import Mie_goyang from '../Assets/Mie_goyang.jpg';
import Udang_rambutan from '../Assets/Udang_rambutan.jpg';
import Ice_lemon_tea from '../Assets/Ice_lemon_tea.jpg';
import Milk_tea from '../Assets/Milk_tea.jpg';

function Pesanan() {
  const [items, setItems] = useState([
    { nama: 'Mie Goyang lv.3', harga: 11500, jumlah: 1, selected: false, img: Mie_goyang },
    { nama: 'Classic Roll', harga: 12000, jumlah: 1, selected: false, img: Udang_rambutan },
    { nama: 'Udang Rambutan', harga: 10000, jumlah: 1, selected: false, img: Udang_rambutan },
    { nama: 'Ice Lemon Tea', harga: 7500, jumlah: 1, selected: false, img: Ice_lemon_tea },
    { nama: 'Milk Tea', harga: 10500, jumlah: 1, selected: false, img: Milk_tea },
  ]);
  const [metodePembayaran, setMetodePembayaran] = useState("Transfer Bank");
  const navigate = useNavigate();

  const totalHarga = items.reduce((total, item) => item.selected ? total + item.harga * item.jumlah : total, 0);
  const totalPesanan = items.reduce((total, item) => item.selected ? total + item.jumlah : total, 0);

  const updateJumlah = (index, delta) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const newJumlah = newItems[index].jumlah + delta;

      if (newJumlah >= 1) {
        newItems[index].jumlah = newJumlah;
      }
      return newItems;
    });
  };

  const toggleSelect = index => {
    setItems(prevItems => {
      const newItems = prevItems.map((item, i) => 
        i === index ? { ...item, selected: !item.selected } : item
      );
      return newItems;
    });
  };

  const toggleSelectAll = (isSelected) => {
    setItems(prevItems => prevItems.map(item => ({ ...item, selected: isSelected })));
  };

  const hapusItem = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const allSelected = items.every(item => item.selected);

  const handlePesan = () => {
    if (metodePembayaran === "Transfer Bank") {
      navigate('/TransferBank', { state: { totalHarga } });
    } else if (metodePembayaran === "Debit") {
      navigate('/Debit');
    } else if (metodePembayaran === "Qris") {
      navigate('/Qris');
    } else if (metodePembayaran === "Dana") {
      navigate('/Dana');
    } else if (metodePembayaran === "Cash") {
      navigate('/Cash');
    }
  };

  return (
    <Container fluid className="bg-light vh-100 d-flex flex-column">
      <Row className="flex-grow-1">
        <Col xs={3} className="bg-secondary text-white p-3" style={{ overflowY: 'auto' }}>
          <h2>WizzBite</h2>
          <Nav className="flex-column">
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
        </Col>

        <Col xs={9} className="p-4" style={{ overflowY: 'auto' }}>
          <h3 className="mt-4">Selamat Datang!</h3>
          <h5>Pesanan saya</h5>
          <div className="border mt-3 p-3" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
            <Row className="text-center font-weight-bold">
              <Col xs={4}>Menu</Col>
              <Col xs={2}>Harga Satuan</Col>
              <Col xs={2}>Jumlah</Col>
              <Col xs={2}>Total Harga</Col>
            </Row>
            <hr />

            {items.map((item, index) => (
              <ItemPesanan
                key={index}
                nama={item.nama}
                harga={item.harga}
                jumlah={item.jumlah}
                selected={item.selected}
                img={item.img}
                onTambah={() => updateJumlah(index, 1)}
                onKurang={() => updateJumlah(index, -1)}
                onSelect={() => toggleSelect(index)}
                onHapus={() => hapusItem(index)}
              />
            ))}

            <Row className="mt-4">
              <Col xs={6}>
                <Form.Group controlId="metodePembayaran">
                  <Form.Label>Pilih Metode Pembayaran</Form.Label>
                  <Form.Control 
                    as="select" 
                    value={metodePembayaran} 
                    onChange={(e) => setMetodePembayaran(e.target.value)}
                  >
                    <option>Transfer Bank</option>
                    <option>Debit</option>
                    <option>Qris</option>
                    <option>Dana</option>
                    <option>Cash</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col xs={6}>
                <Form.Check 
                  type="checkbox" 
                  label="Pilih semua" 
                  className="pilih-semua" 
                  checked={allSelected}
                  onChange={(e) => toggleSelectAll(e.target.checked)} 
                />
              </Col>
              <Col xs={4} className="text-right">
                <h5 className="total-pesanan">Total ({totalPesanan} pesanan): Rp. {totalHarga.toLocaleString('id-ID')},00</h5>
              </Col>
              <Col xs={2} className="text-right">
                <Button variant="primary" className="pesan-btn" onClick={handlePesan}>Pesan</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function ItemPesanan({ nama, harga, jumlah, selected, img, onTambah, onKurang, onSelect, onHapus }) {
  return (
    <Row className="align-items-center my-3 order-item">
      <Col xs={1}>
        <Form.Check type="checkbox" checked={selected} onChange={onSelect} />
      </Col>
      <Col xs={3}>
        <div>
          <img src={img} alt={nama} className="item-image" style={{ width: '60px', height: '60px' }} />
          <span className="ml-2">{nama}</span>
        </div>
      </Col>
      <Col xs={2} className="order-item-price">{harga / 1000}K</Col>
      <Col xs={2} className="quantity-controls">
        <Button variant="outline-secondary" onClick={onKurang} disabled={jumlah <= 1}>-</Button>
        <span className="mx-2">{jumlah}</span>
        <Button variant="outline-secondary" onClick={onTambah}>+</Button>
      </Col>
      <Col xs={2} className="total-price">{(harga * jumlah) / 1000}K</Col>
      <Col xs={2}>
        <Button variant="danger" onClick={onHapus}>🗑</Button>
      </Col>
    </Row>
  );
}

export default Pesanan;