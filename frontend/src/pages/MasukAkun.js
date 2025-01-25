import React, { useState } from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style/MasukAkun.css';

const MasukAkun = () => {
  const [emailAtauHp, setEmailAtauHp] = useState('');
  const [kataSandi, setKataSandi] = useState('');
  const [tampilkanKataSandi, setTampilkanKataSandi] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleTampilanKataSandi = () => {
    setTampilkanKataSandi(!tampilkanKataSandi);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailAtauHp === 'admin@wizzmie.com' && kataSandi === 'admin123') {
      navigate('/homeadmin');
    } else if (isEmailValid(emailAtauHp) || isPhoneNumberValid(emailAtauHp)) {
      navigate('/home');
    } else {
      setError('Email, nomor telepon, atau password salah. Silakan coba lagi.');
    }
  };

  const isEmailValid = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const isPhoneNumberValid = (input) => {
    const phoneRegex = /^[0-9]{10,13}$/;
    return phoneRegex.test(input);
  };

  return (
    <Container className="login-container">
      <div className="login-box">
        <h3 className="login-title">Masuk</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Masukkan Email atau Nomor Telepon</Form.Label>
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
                type={tampilkanKataSandi ? 'text' : 'password'}
                placeholder="Kata Sandi"
                value={kataSandi}
                onChange={(e) => setKataSandi(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          {error && <p className="text-danger mt-3">{error}</p>}

          <Button variant="primary" type="submit" className="login-button mt-3">
            Masuk
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default MasukAkun;