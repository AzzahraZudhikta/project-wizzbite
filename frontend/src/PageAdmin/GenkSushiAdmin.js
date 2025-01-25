import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import '../style/GenkSushiAdmin.css'; // Pastikan CSS Anda sudah sesuai
import { Edit, Delete } from '@mui/icons-material';

// Impor gambar
import ClassicRoll from '../Assets/Classic_roll.jpg';
import RetroRoll from '../Assets/Retro_roll.jpg';
import HipRoll from '../Assets/Hip_roll.jpg';
import RockNRoll from '../Assets/Rock_n_roll.jpg';
import EbiFurai from '../Assets/Ebi_furai.jpg';
import ElectricRoll from '../Assets/Electric_roll.jpg';

const GenkSushiAdmin = () => {
  const navigate = useNavigate(); // Hook untuk navigasi programmatically

  const cardData = [
    { id: 'classicRoll', title: 'Classic Roll', img: ClassicRoll, price: '12k' },
    { id: 'retroRoll', title: 'Retro Roll', img: RetroRoll, price: '12k' },
    { id: 'hipAndRoll', title: 'Hip & Roll', img: HipRoll, price: '12k' },
    { id: 'rockNRoll', title: 'Rock N Roll', img: RockNRoll, price: '12k' },
    { id: 'ebiFurai', title: 'Ebi Furai', img: EbiFurai, price: '12k' },
    { id: 'electricRoll', title: 'Electric Roll', img: ElectricRoll, price: '12k' },
  ];

  const handleEditClick = (menuId) => {
    navigate(`/EditGenkSushi/${menuId}`); // Navigasi ke halaman Edit dengan menuId
  };

  const handleDeleteClick = (title) => {
    alert(`Hapus menu ${title}`); // Logika untuk hapus (misalnya, konfirmasi atau API call)
  };

  const handleTambahMenuClick = () => {
    navigate('/TambahMenuGenkSushi'); // Navigasi ke halaman Tambah Menu
  };

  return (
    <div className="genk-sushi-admin">
      <HeaderAdmin /> {/* Header di bagian atas */}
      <div style={{ display: 'flex', flex: 1 }}>
        <SidebarAdmin /> {/* Sidebar di sisi kiri */}
        <div className="main-content">
          <h2>Menu</h2>
          <Button
            variant="success"
            className="btn-tambah-menu"
            onClick={handleTambahMenuClick}
          >
            + Tambah Menu Genk Sushi
          </Button>

          <div className="card-container">
            {cardData.map((card) => (
              <BootstrapCard key={card.id} className="card">
                <BootstrapCard.Img variant="top" src={card.img} alt={card.title} />
                <BootstrapCard.Body>
                  <div className="menu-info">
                    <p className="menu-title">{card.title}</p>
                    <p className="menu-price">{card.price}</p>
                  </div>
                  <div className="card-actions">
                    <Edit
                      onClick={() => handleEditClick(card.id)}
                      style={{ cursor: 'pointer' }}
                    />
                    <Delete
                      onClick={() => handleDeleteClick(card.title)}
                      style={{ color: 'red', cursor: 'pointer' }}
                    />
                  </div>
                </BootstrapCard.Body>
              </BootstrapCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenkSushiAdmin;
