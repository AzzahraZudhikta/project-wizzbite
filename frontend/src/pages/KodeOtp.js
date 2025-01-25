import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../style/KodeOtp.css"; // Pastikan file CSS terhubung

const KodeOtp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Hanya mengambil satu karakter terakhir
    setOtp(newOtp);

    // Pindah fokus ke input berikutnya
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Pindah ke input sebelumnya jika tombol Backspace ditekan dan input kosong
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = () => {
    if (otp.includes("")) {
      alert("Harap isi semua kode OTP.");
    } else {
      alert(`Kode OTP Anda adalah: ${otp.join("")}`);
      navigate("/RincianPesananDana"); // Navigasi ke halaman Rincian Pesanan Dana
    }
  };

  return (
    <Container fluid className="vh-100 d-flex flex-column bg-light">
      <Row className="flex-grow-1">
        {/* Sidebar */}
        <Col xs={3} className="bg-secondary text-white p-3">
          <h2>WizzBite</h2>
          <Nav className="flex-column">
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/home" className="nav-link text-white">
                🏠 Beranda
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/pesanan" className="nav-link text-white">
                🛒 Pesanan
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/ulasan" className="nav-link text-white">
                ⭐ Ulasan
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Konten Utama */}
        <Col
          xs={9}
          className="kodeotp-container d-flex align-items-center justify-content-center"
        >
          <div className="kodeotp-box">
            <h5 className="text-center mb-3">KODE OTP</h5>
            <p className="text-center mb-4">Masukkan kode OTP</p>
            <Form className="d-flex justify-content-center mb-4">
              {otp.map((value, index) => (
                <Form.Control
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={value}
                  className="otp-input mx-1 text-center"
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </Form>
            <div className="text-center">
              <Button
                variant="primary"
                className="btn-next"
                onClick={handleSubmit}
              >
                Selanjutnya
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default KodeOtp;
