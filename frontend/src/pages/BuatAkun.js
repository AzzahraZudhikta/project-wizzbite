import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Mengimpor useNavigate dari react-router-dom
import '../style/BuatAkun.css';  // Mengimpor file CSS untuk gaya

function BuatAkun() {
  // State untuk menangani form input
  const [namaLengkap, setNamaLengkap] = useState('');
  const [emailHp, setEmailHp] = useState('');
  const [kataSandi, setKataSandi] = useState('');

  // Hook untuk navigasi
  const navigate = useNavigate();

  // Handler saat form disubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan proses pengiriman data ke server atau validasi
    console.log("Nama Lengkap:", namaLengkap);
    console.log("Email/No Handphone:", emailHp);
    console.log("Kata Sandi:", kataSandi);

    // Navigasi ke halaman "Akun Berhasil Dibuat" setelah form disubmit
    navigate('/akunberhasildibuat');
  };

  // Fungsi untuk mengarahkan ke halaman Masuk Akun
    const handleLoginClick = () => {
    navigate('/masukakun');
  };

  return (
    <div className="login-container">
      <h2 className="font-1 text-center mb-4">Buat Akun</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nama Lengkap"
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)} // Mengupdate state
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email/No Handphone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email/No Handphone"
            value={emailHp}
            onChange={(e) => setEmailHp(e.target.value)} // Mengupdate state
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Kata Sandi</Form.Label>
          <Form.Control
            type="password"
            placeholder="Kata Sandi"
            value={kataSandi}
            onChange={(e) => setKataSandi(e.target.value)} // Mengupdate state
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="login-button w-100">
          Buat Akun
        </Button>
      </Form>
      <Button variant="link" className="mt-3" onClick={handleLoginClick}>
        Sudah Punya Akun? Masuk
      </Button>
    </div>
  );
}

export default BuatAkun;