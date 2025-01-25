import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../style/KodePin.css"; // Pastikan file CSS terhubung

const KodePin = () => {
  const [pin, setPin] = useState(new Array(6).fill("")); // State untuk menyimpan nilai PIN
  const [showPin, setShowPin] = useState(false); // State untuk mengatur apakah PIN ditampilkan atau tidak
  const navigate = useNavigate(); // Inisialisasi useNavigate untuk navigasi

  const handleChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value.slice(-1); // Ambil hanya karakter terakhir
    setPin(newPin);

    // Pindahkan fokus ke input berikutnya
    if (value && index < pin.length - 1) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Pindahkan fokus ke input sebelumnya saat Backspace ditekan
    if (e.key === "Backspace" && pin[index] === "" && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const toggleShowPin = () => {
    setShowPin(!showPin); // Toggle state untuk menampilkan atau menyembunyikan PIN
  };

  const handleNext = () => {
    // Validasi apakah semua input telah terisi
    if (pin.every((digit) => digit !== "")) {
      // Navigasi ke halaman KodeOtp
      navigate("/KodeOtp");
    } else {
      alert("Harap isi semua digit PIN!");
    }
  };

  return (
    <Container fluid className="vh-100 d-flex flex-column bg-light">
      <Row className="flex-grow-1">
        {/* Sidebar */}
        <Col xs={3} className="bg-secondary text-white p-3" style={{ overflowY: "auto" }}>
          <h2>WizzBite</h2>
          <Nav className="flex-column">
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/Home" className="nav-link text-white">
                🏠 Beranda
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/Pesanan" className="nav-link text-white">
                🛒 Pesanan
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/Ulasan" className="nav-link text-white">
                ⭐ Ulasan
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Konten Utama */}
        <Col xs={9} className="kodepin-container d-flex align-items-center justify-content-center">
          <div className="kodepin-box">
            <h5 className="text-center mb-4">Masukkan Kode PIN Anda</h5>
            <Form className="d-flex justify-content-center mb-3">
              {pin.map((value, index) => (
                <Form.Control
                  key={index}
                  type={showPin ? "text" : "password"}
                  id={`pin-${index}`} // Menggunakan backticks
                  maxLength="1"
                  value={value}
                  className="pin-input mx-1 text-center"
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </Form>
            <div className="text-center mb-3">
              <Button variant="light" className="btn-tampilkan" onClick={toggleShowPin}>
                {showPin ? "SEMBUNYIKAN" : "TAMPILKAN"}
              </Button>
            </div>
            <div className="text-center">
              <Button variant="primary" className="btn-next" onClick={handleNext}>
                NEXT
              </Button>
            </div>
            {showPin && (
              <p className="text-center mt-3">
                PIN Anda: <strong>{pin.join("")}</strong>
              </p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default KodePin;
