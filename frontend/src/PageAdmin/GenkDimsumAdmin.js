import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import '../style/GenkDimsumAdmin.css'; // Pastikan CSS Anda sudah sesuai
import { Edit, Delete } from '@mui/icons-material';

// Impor gambar dari assets
import Siomay from '../Assets/Siomay.jpg';
import Pangsit_goreng from '../Assets/Pangsit_goreng.jpg';
import Udang_keju from '../Assets/Udang_keju.jpg';
import Udang_rambutan from '../Assets/Udang_rambutan.jpg';
import Lumpia_udang from '../Assets/Lumpia_udang.jpg';
import Ceker from '../Assets/Ceker.jpg';

const GenkDimsumAdmin = () => {
  const navigate = useNavigate(); // Hook untuk navigasi programmatically

  // Daftar menu dengan gambar yang sesuai
  const menuItems = [
    { id: 'siomay', name: 'Siomay', price: '10k', img: Siomay },
    { id: 'pangsitGoreng', name: 'Pangsit Goreng', price: '10k', img: Pangsit_goreng },
    { id: 'udangKeju', name: 'Udang Keju', price: '10k', img: Udang_keju },
    { id: 'udangRambutan', name: 'Udang Rambutan', price: '10k', img: Udang_rambutan },
    { id: 'lumpiaUdang', name: 'Lumpia Udang', price: '10k', img: Lumpia_udang },
    { id: 'ceker', name: 'Ceker', price: '10k', img: Ceker },
  ];

  const handleEditClick = (menuId) => {
    navigate(`/EditGenkDimsum/${menuId}`); // Navigasi ke halaman Edit dengan menuId
  };

  const handleDeleteClick = (name) => {
    alert(`Hapus menu ${name}`); // Logika untuk hapus (misalnya, konfirmasi atau API call)
  };

  const handleTambahMenuClick = () => {
    navigate('/TambahMenuGenkDimsum'); // Navigasi ke halaman Tambah Menu
  };

  return (
    <div className="genk-dimsum-admin">
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
            + Tambah Menu Genk Dimsum
          </Button>

          <div className="card-container">
            {menuItems.map((menu) => (
              <BootstrapCard key={menu.id} className="card">
                <BootstrapCard.Img variant="top" src={menu.img} alt={menu.name} />
                <BootstrapCard.Body>
                  <div className="menu-info">
                    <p className="menu-title">{menu.name}</p>
                    <p className="menu-price">{menu.price}</p>
                  </div>
                  <div className="card-actions">
                    <Edit
                      onClick={() => handleEditClick(menu.id)}
                      style={{ cursor: 'pointer' }}
                    />
                    <Delete
                      onClick={() => handleDeleteClick(menu.name)}
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

export default GenkDimsumAdmin;
