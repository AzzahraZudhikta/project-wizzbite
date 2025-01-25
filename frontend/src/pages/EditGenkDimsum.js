import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
// Impor gambar dari assets
import Siomay from '../Assets/Siomay.jpg';
import Pangsit_goreng from '../Assets/Pangsit_goreng.jpg';
import Udang_keju from '../Assets/Udang_keju.jpg';
import Udang_rambutan from '../Assets/Udang_rambutan.jpg';
import Lumpia_udang from '../Assets/Lumpia_udang.jpg';
import Ceker from '../Assets/Ceker.jpg';

const EditGenkDimsum = () => {
  const { menuId } = useParams(); // Ambil parameter menuId dari URL
  const navigate = useNavigate();
  const [namaMenu, setNamaMenu] = useState('');
  const [hargaMenu, setHargaMenu] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Untuk menyimpan file gambar

  // Simulasi data menu berdasarkan menuId
  const menuData = {
    siomay: {
      nama: 'Siomay',
      harga: 10000,
      img: Siomay,
    },
    pangsitGoreng: {
      nama: 'Pangsit Goreng',
      harga: 10000,
      img: Pangsit_goreng,
    },
    udangKeju: {
      nama: 'Udang Keju',
      harga: 10000,
      img: Udang_keju,
    },
    udangRambutan: {
      nama: 'Udang Rambutan',
      harga: 10000,
      img: Udang_rambutan,
    },
    lumpiaUdang: {
      nama: 'Lumpia Udang',
      harga: 10000,
      img: Lumpia_udang,
    },
    ceker: {
      nama: 'Ceker',
      harga: 10000,
      img: Ceker,
    },
  };

  const formatHarga = (value) => {
    if (value >= 1000) {
      return `${value / 1000}k`;
    }
    return value;
  };

  const parseHarga = (value) => {
    if (value.endsWith('k')) {
      return parseFloat(value.replace('k', '')) * 1000;
    }
    return parseInt(value, 10);
  };

  useEffect(() => {
    if (menuId && menuData[menuId]) {
      const menu = menuData[menuId];
      setNamaMenu(menu.nama);
      setHargaMenu(formatHarga(menu.harga));
      setSelectedImage(menu.img);
    }
  }, [menuId]);

  const handleNamaChange = (event) => {
    setNamaMenu(event.target.value);
  };

  const handleHargaChange = (event) => {
    const value = event.target.value;
    if (!isNaN(parseHarga(value)) || value.endsWith('k')) {
      setHargaMenu(value);
    }
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

    const parsedHarga = parseHarga(hargaMenu);
    alert(`Menu "${namaMenu}" dengan harga "${parsedHarga}" berhasil diperbarui!`);
    setTimeout(() => {
      navigate('/GenkDimsumAdmin');
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
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>Edit Menu Genk Dimsum</h2>
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

export default EditGenkDimsum;
