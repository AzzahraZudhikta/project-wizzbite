import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import '../style/GenkDimsumAdmin.css'; // Pastikan file CSS sudah benar
import { Edit, Delete } from '@mui/icons-material';

// Impor gambar dari assets
import Ice_dj from '../Assets/Ice_dj.jpg';
import Ice_reggae from '../Assets/Ice_reggae.jpg';
import Ice_funky from '../Assets/Ice_funky.jpg';
import Green_tea from '../Assets/Green_tea.jpg';
import Ice_lemon_tea from '../Assets/Ice_lemon_tea.jpg';
import Ice_tea from '../Assets/Ice_tea.jpg';
import Matcha_latte from '../Assets/Matcha_latte.jpg';
import Milk_tea from '../Assets/Milk_tea.jpg';
import Red_velvet from '../Assets/Red_velvet.jpg';

const MinumanAdmin = () => {
  const navigate = useNavigate();

  // Daftar menu minuman dengan gambar dan harga
  const menuItems = [
    { id: 'iceDj', name: 'Ice DJ', price: '12K', img: Ice_dj },
    { id: 'iceReggae', name: 'Ice Reggae', price: '11K', img: Ice_reggae },
    { id: 'iceFunky', name: 'Ice Funky', price: '9.5K', img: Ice_funky },
    { id: 'greenTea', name: 'Green Tea', price: '12.5K', img: Green_tea },
    { id: 'iceLemonTea', name: 'Ice Lemon Tea', price: '7.5K', img: Ice_lemon_tea },
    { id: 'iceTea', name: 'Ice Tea', price: '7K', img: Ice_tea },
    { id: 'matchaLatte', name: 'Matcha Latte', price: '12.5K', img: Matcha_latte },
    { id: 'milkTea', name: 'Milk Tea', price: '10.5K', img: Milk_tea },
    { id: 'redVelvet', name: 'Red Velvet', price: '13K', img: Red_velvet },
  ];

  const handleEditClick = (menuId) => {
    navigate(`/EditMinuman/${menuId}`); // Navigasi ke halaman Edit
  };

  const handleDeleteClick = (name) => {
    alert(`Hapus menu ${name}`); // Logika hapus
  };

  const handleTambahMenuClick = () => {
    navigate('/TambahMenuMinuman'); // Navigasi ke halaman Tambah Menu
  };

  return (
    <div className="genk-dimsum-admin">
      <HeaderAdmin />
      <div style={{ display: 'flex', flex: 1 }}>
        <SidebarAdmin />
        <div className="main-content">
          <h2>Menu Minuman</h2>
          <Button
            variant="success"
            className="btn-tambah-menu"
            onClick={handleTambahMenuClick}
          >
            + Tambah Menu Minuman
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

export default MinumanAdmin;
