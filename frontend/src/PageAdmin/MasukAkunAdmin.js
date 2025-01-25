import React, { useState } from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style/MasukAkunAdmin.css';

const MasukAkunAdmin = () => {
  const [emailAtauHp, setEmailAtauHp] = useState('');
  const [kataSandi, setKataSandi] = useState('');
  const [tampilkanKataSandi, setTampilkanKataSandi] = useState(false);
  const navigate = useNavigate();  // Menggunakan useNavigate untuk navigasi halaman

  const toggleTampilanKataSandi = () => {
    setTampilkanKataSandi(!tampilkanKataSandi);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk mengirim data login ke server
    console.log('Email atau No Hp:', emailAtauHp);
    console.log('Kata Sandi:', kataSandi);

    // Jika login berhasil, arahkan ke halaman AkunBerhasilMasuk
    navigate('/akunberhasilmasukadmin');  // Navigasi ke halaman sukses login
  };

  return (
    <Container className="login-container">
      <div className="login-box">
        <h3 className="login-title">Masuk</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Masukkan Email/No Hp</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email atau No Hp"
              value={emailAtauHp}
              onChange={(e) => setEmailAtauHp(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Kata Sandi</Form.Label>
            <InputGroup>
              <Form.Control
                type={tampilkanKataSandi ? "text" : "password"}
                placeholder="Kata Sandi"
                value={kataSandi}
                onChange={(e) => setKataSandi(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button mt-3">
            Masuk
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default MasukAkunAdmin;