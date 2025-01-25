import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
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

const EditMinuman = () => {
  const { menuId } = useParams(); // Ambil parameter menuId dari URL
  const navigate = useNavigate();
  const [namaMenu, setNamaMenu] = useState('');
  const [hargaMenu, setHargaMenu] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Untuk menyimpan file gambar

  // Simulasi data menu berdasarkan menuId
  const menuData = {
    iceDj: { nama: 'Ice DJ', harga: '12K', img: Ice_dj },
    iceReggae: { nama: 'Ice Reggae', harga: '11K', img: Ice_reggae },
    iceFunky: { nama: 'Ice Funky', harga: '9.5K', img: Ice_funky },
    greenTea: { nama: 'Green Tea', harga: '12.5K', img: Green_tea },
    iceLemonTea: { nama: 'Ice Lemon Tea', harga: '7.5K', img: Ice_lemon_tea },
    iceTea: { nama: 'Ice Tea', harga: '7K', img: Ice_tea },
    matchaLatte: { nama: 'Matcha Latte', harga: '12.5K', img: Matcha_latte },
    milkTea: { nama: 'Milk Tea', harga: '10.5K', img: Milk_tea },
    redVelvet: { nama: 'Red Velvet', harga: '13K', img: Red_velvet },
  };

  useEffect(() => {
    if (menuId && menuData[menuId]) {
      const menu = menuData[menuId];
      setNamaMenu(menu.nama);
      setHargaMenu(menu.harga);
      setSelectedImage(menu.img);
    }
  }, [menuId]);

  const handleNamaChange = (event) => {
    setNamaMenu(event.target.value);
  };

  const handleHargaChange = (event) => {
    setHargaMenu(event.target.value);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleSave = () => {
    if (!namaMenu.trim() || !hargaMenu.trim()) {
      alert('Nama dan harga menu tidak boleh kosong!');
      return;
    }

    alert(`Menu "${namaMenu}" dengan harga "${hargaMenu}" berhasil diperbarui!`);
    setTimeout(() => {
      navigate('/MinumanAdmin'); // Redirect ke halaman admin minuman
    }, 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <HeaderAdmin />
      <div style={{ display: 'flex', flex: 1, backgroundColor: 'white' }}>
        <SidebarAdmin />
        <div
          className="main-content"
          style={{
            padding: '20px',
            marginLeft: '260px',
            width: 'calc(100% - 260px)',
            backgroundColor: 'white',
          }}
        >
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>Edit Menu Minuman</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '20px',
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              style={{
                width: '150px',
                height: '150px',
                border: '2px dashed #ccc',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                overflow: 'hidden',
                backgroundColor: '#f8f8f8',
              }}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <label htmlFor="imageUpload" style={{ cursor: 'pointer', color: '#aaa', textAlign: 'center' }}>
                  +
                  <input
                    type="file"
                    id="imageUpload"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              )}
            </div>

            <input
              type="text"
              value={namaMenu}
              onChange={handleNamaChange}
              placeholder="Nama"
              style={{
                width: '80%',
                padding: '10px',
                fontSize: '16px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />

            <input
              type="text"
              value={hargaMenu}
              onChange={handleHargaChange}
              placeholder="Harga"
              style={{
                width: '80%',
                padding: '10px',
                fontSize: '16px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />

            <button
              onClick={handleSave}
              style={{
                backgroundColor: '#5C828A',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMinuman;
