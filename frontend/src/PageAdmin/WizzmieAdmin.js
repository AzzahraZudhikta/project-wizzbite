import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import '../style/WizzmieAdmin.css'; // Pastikan file CSS sudah benar

// Impor gambar
import MieGoyang from '../Assets/Mie_goyang.jpg';
import MieDisko from '../Assets/Mie_disko.jpg';
import MieManja from '../Assets/Mie_manja.jpg';

const WizzmieAdmin = () => {
  const navigate = useNavigate();

  const cardData = [
    { title: 'Mie Goyang', path: '/MieGoyangAdmin', img: MieGoyang },
    { title: 'Mie Disko', path: '/MieDiskoAdmin', img: MieDisko },
    { title: 'Mie Manja', path: '/MieManjaAdmin', img: MieManja },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleTambahMenuClick = () => {
    navigate('/TambahMenuWizzmie');
  };

  return (
    <div className="wizzmie-admin" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <HeaderAdmin />
      <div style={{ display: 'flex', flex: 1 }}>
        <SidebarAdmin />
        <div className="main-content">
          {/* Menu Header */}
          <div className="menu-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Menu</h2>
            <Button
              variant="success"
              className="btn-tambah-menu"
              onClick={handleTambahMenuClick}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
              }}
            >
              + Tambah Menu
            </Button>
          </div>

          {/* Card Container */}
          <div className="card-container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {cardData.map((card, index) => (
              <BootstrapCard key={index} className="card" style={{ width: '12rem', textAlign: 'center' }}>
                <BootstrapCard.Img variant="top" src={card.img} alt={card.title} />
                <BootstrapCard.Body>
                  <Button
                    variant="secondary"
                    className="btn"
                    onClick={() => handleCardClick(card.path)}
                  >
                    {card.title}
                  </Button>
                </BootstrapCard.Body>
              </BootstrapCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizzmieAdmin;
