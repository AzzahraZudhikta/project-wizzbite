import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';  // Impor ikon ceklis
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import Mie_manja from '../Assets/Mie_manja.jpg';

const EditMenuAdminWizzmie = ({ menuName, onSave }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(menuName || 'Wizzmie'); // Default ke "Wizzmie"
  const [isSaved, setIsSaved] = useState(false); // State untuk mengecek apakah sudah disimpan

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update state saat pengguna mengetik
  };

  const handleSave = () => {
    setIsSaved(true); // Ubah state menjadi true setelah tombol simpan ditekan

    // Show notification after saving
    setTimeout(() => {
      alert('Nama berhasil di edit');
      navigate('/MenuAdmin'); // Navigasi setelah notifikasi
    }, 1000); // Simulate a short delay before showing the notification
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* HeaderAdmin di bagian atas */}
      <HeaderAdmin />
      <div style={{ display: 'flex', flex: 1 }}>
        <SidebarAdmin /> {/* Sidebar di sisi kiri */}
        <div className="main-content">
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '40px' }}>
            Edit Menu: {menuName || 'Wizzmie'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
            {/* Pusatkan gambar dan input */}
            <img
              src={Mie_manja}
              alt="Mie Manja"
              style={{
                width: '300px',
                height: 'auto',
                borderRadius: '10px',
                marginBottom: '20px',
              }}
            />
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              style={{
                width: '60%', // Atur lebar input agar tidak memenuhi seluruh lebar
                padding: '10px',
                fontSize: '16px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
            <Button
              variant="success"
              onClick={handleSave}
              disabled={isSaved} // Disable tombol setelah disimpan
            >
              {isSaved ? <FaCheck style={{ color: 'white' }} /> : 'Simpan'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMenuAdminWizzmie;
