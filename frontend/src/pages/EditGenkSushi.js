import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import ClassicRoll from '../Assets/Classic_roll.jpg';
import RetroRoll from '../Assets/Retro_roll.jpg';
import HipRoll from '../Assets/Hip_roll.jpg';
import RockNRoll from '../Assets/Rock_n_roll.jpg';
import EbiFurai from '../Assets/Ebi_furai.jpg';
import ElectricRoll from '../Assets/Electric_roll.jpg';

const EditGenkSushi = () => {
  const { menuId } = useParams(); // Ambil parameter menuId dari URL
  const navigate = useNavigate();
  const [namaMenu, setNamaMenu] = useState('');
  const [hargaMenu, setHargaMenu] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Untuk menyimpan file gambar 

  // Simulasi data menu berdasarkan menuId
  const menuData = {
    classicRoll: {
      nama: 'Classic Roll',
      harga: 12000,
      img: ClassicRoll,
    },
    retroRoll: {
      nama: 'Retro Roll',
      harga: 12000,
      img: RetroRoll,
    },
    hipAndRoll: {
      nama: 'Hip & Roll',
      harga: 12000,
      img: HipRoll,
    },
    rockNRoll: {
      nama: 'Rock n Roll',
      harga: 12000,
      img: RockNRoll,
    },
    ebiFurai: {
      nama: 'Ebi Furai',
      harga: 12000,
      img: EbiFurai,
    },
    electricRoll: {
      nama: 'Electric Roll',
      harga: 12000,
      img: ElectricRoll,
    },
  };

  // Fungsi untuk mengubah angka ke format '12k'
  const formatHarga = (value) => {
    if (value >= 1000) {
      return `${value / 1000}k`;
    }
    return value;
  };

  // Fungsi untuk mengubah format '12k' kembali ke angka
  const parseHarga = (value) => {
    if (value.endsWith('k')) {
      return parseFloat(value.replace('k', '')) * 1000;
    }
    return parseInt(value, 10);
  };

  useEffect(() => {
    // Muat data menu berdasarkan menuId
    if (menuId && menuData[menuId]) {
      const menu = menuData[menuId];
      setNamaMenu(menu.nama);
      setHargaMenu(formatHarga(menu.harga)); // Format harga sebagai '12k'
      setSelectedImage(menu.img); // Gunakan menu.img untuk gambar
    }
  }, [menuId]);

  const handleNamaChange = (event) => {
    setNamaMenu(event.target.value);
  };

  const handleHargaChange = (event) => {
    const value = event.target.value;
    if (!isNaN(parseHarga(value)) || value.endsWith('k')) {
      setHargaMenu(value); // Simpan harga dalam format input
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
      setImageFile(file); // Simpan file asli
    }
  };

  const handleSave = () => {
    if (!namaMenu.trim() || !hargaMenu.trim()) {
      alert('Nama dan harga menu tidak boleh kosong!');
      return;
    }

    const parsedHarga = parseHarga(hargaMenu); // Konversi kembali ke angka
    alert(`Menu "${namaMenu}" dengan harga "${parsedHarga}" berhasil diperbarui!`);
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
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>Edit Menu Genk Sushi</h2>
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
              placeholder="Harga (contoh: 12k)"
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

export default EditGenkSushi;
