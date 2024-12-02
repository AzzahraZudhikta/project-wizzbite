import React, { useState } from "react";
import { Container, Navbar, Nav, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../style/BeriUlasan.css";

function BeriUlasan() {
  const [foodRating, setFoodRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [parkingCondition, setParkingCondition] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const navigate = useNavigate();

  const handleRating = (type, value) => {
    if (type === "food") setFoodRating(value);
    if (type === "service") setServiceRating(value);
  };

  const handleParkingOption = (option) => {
    setParkingCondition(option);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) setSelectedPhoto(URL.createObjectURL(file));
  };

  const handlePost = () => {
    const newReview = {
      foodRating,
      serviceRating,
      reviewText,
      parkingCondition,
      selectedPhoto,
    };
    console.log("Review Submitted:", newReview);
    navigate("/Ulasan", { state: newReview });
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Navbar className="sidebar d-flex flex-column">
        <Navbar.Brand className="sidebar-title text-center my-4">
          WizzBite
        </Navbar.Brand>
        <Nav className="nav flex-column w-100">
          <Nav.Item>
            <Nav.Link as={Link} to="/Home">
              🏠 Beranda
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Pesanan">
              🛒 Pesanan
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/BeriUlasan" active>
              ⭐ Ulasan
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      {/* Main Content */}
      <Container className="main-content py-4">
        <h4 className="welcome-text">Selamat Datang!</h4>
        <p>
          <strong>Bunga Gayati</strong> <br />
          memposting untuk publik di <strong>WizzBite</strong>
        </p>

        {/* Rating Section */}
        <div className="rating-section d-flex align-items-center mb-3">
          <h5 className="me-3">Makanan:</h5>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= foodRating ? "active" : ""}`}
                onClick={() => handleRating("food", star)}
              >
                ⭐
              </span>
            ))}
          </div>
        </div>

        <div className="rating-section d-flex align-items-center mb-3">
          <h5 className="me-3">Layanan:</h5>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= serviceRating ? "active" : ""}`}
                onClick={() => handleRating("service", star)}
              >
                ⭐
              </span>
            ))}
          </div>
        </div>

        {/* Review Form */}
        <Form>
          <Form.Group controlId="reviewTextarea" className="mt-3">
            <Form.Label>Bagikan pengalaman Anda</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Tulis pengalaman Anda di sini"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="photoUpload" className="mt-3">
            <Form.Label>Tambahkan Foto</Form.Label>
            <Form.Control type="file" onChange={handleFileUpload} />
            {selectedPhoto && (
              <img
                src={selectedPhoto}
                alt="Review"
                style={{ maxWidth: "100%", marginTop: "10px" }}
              />
            )}
          </Form.Group>
        </Form>

        {/* Parking Options */}
        <h5 className="mt-4">Bagaimana kondisi tempat parkir di sini?</h5>
        <div className="parking-options">
          {["Banyak tempat parkir", "Tempat parkir sedikit ditemukan", "Tempat parkir sulit ditemukan"].map(
            (option) => (
              <Button
                key={option}
                variant={
                  parkingCondition === option ? "dark" : "outline-dark"
                }
                className="me-2"
                onClick={() => handleParkingOption(option)}
              >
                {option}
              </Button>
            )
          )}
        </div>

        {/* Post Button */}
        <Button variant="primary" className="mt-4 w-100" onClick={handlePost}>
          Posting
        </Button>
      </Container>
    </div>
  );
}

export default BeriUlasan;