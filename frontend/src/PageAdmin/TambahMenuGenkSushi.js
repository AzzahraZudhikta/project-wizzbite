import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';

const TambahMenuGenkSushi = () => {
  const navigate = useNavigate();
  const [namaMenu, setNamaMenu] = useState('');
  const [hargaMenu, setHargaMenu] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Untuk menyimpan file gambar

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
      setImageFile(file); // Simpan file asli
    }
  };

  const handleSave = () => {
    if (!namaMenu.trim() || !hargaMenu.trim() || !imageFile) {
      alert('Nama, harga menu, dan gambar tidak boleh kosong!');
      return;
    }

    alert('Menu berhasil ditambahkan!');
    setTimeout(() => {
      navigate('/GenkSushiAdmin'); // Redirect ke halaman admin setelah jeda
    }, 2000); // 2 detik jeda sebelum kembali
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
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>Tambah Menu Genk Sushi</h2>
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
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahMenuGenkSushi;
