import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Card as BootstrapCard, Button } from 'react-bootstrap';
import '../style/Sidebar.css';

// Import gambar
import MieManja from '../Assets/Mie_manja.jpg';
import RetroRoll from '../Assets/Retro_roll.jpg';
import PangsitGoreng from '../Assets/Pangsit_goreng.jpg';
import IceTea from '../Assets/Ice_tea.jpg';

const SidebarWithCards = () => {
  const navigate = useNavigate(); // Hook untuk navigasi programmatically

  // Data kartu dengan gambar
  const cardData = [
    { title: 'WizzMie', path: '/wizzmie', img: MieManja },
    { title: 'Genk Sushi', path: '/genksushi', img: RetroRoll },
    { title: 'Genk Dimsum', path: '/genkdimsum', img: PangsitGoreng },
    { title: 'Minuman', path: '/minuman', img: IceTea },
  ];

  const handleCardClick = (path) => {
    navigate(path); // Panggil navigate untuk menuju ke path yang sesuai
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Navbar className="Navbar d-flex flex-column vh-100" style={{ width: '200px' }}>
        <Nav className="Nav flex-column w-100">
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/home" className="nav-link">🏠 Beranda</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/pesanan" className="nav-link">🛒 Pesanan</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/ulasan" className="nav-link">⭐ Ulasan</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      {/* Main Content */}
      <div className="main-content" style={{ padding: '20px', flex: '1', overflowY: 'auto' }}>
        <h2>Selamat Datang!</h2>
        <p>Saatnya Menikmati Ragam Pilihan Menu yang Lezat, Mudah Dipesan, dan Siap Menggugah Selera Kapan Saja.</p>
        <div className="card-container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {cardData.map((card, index) => (
            <BootstrapCard key={index} className="card" style={{ width: '10rem', textAlign: 'center' }}>
              <BootstrapCard.Img variant="top" src={card.img} alt={card.title} />
              <BootstrapCard.Body>
                <Button
                  variant="secondary"
                  className="btn"
                  onClick={() => handleCardClick(card.path)} // Panggil navigate untuk menuju path
                >
                  {card.title}
                </Button>
              </BootstrapCard.Body>
            </BootstrapCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarWithCards;
