import React, { useState } from 'react';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';


const TambahKategori = () => {
  const [namaKategori, setNamaKategori] = useState('');
  const [foto, setFoto] = useState(null);

  // Fungsi untuk membuka galeri (input file)
  const handleFotoClick = () => {
    document.getElementById('fotoInput').click();
  };

  // Fungsi untuk menangani pemilihan file
  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto(URL.createObjectURL(file));
    }
  };

  // Fungsi untuk menghapus foto
  const handleFotoHapus = () => {
    setFoto(null);
    document.getElementById('fotoInput').value = null; // Reset input file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nama Kategori:', namaKategori);
    console.log('Foto:', foto);
    alert('Kategori berhasil ditambahkan!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <HeaderAdmin />

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <SidebarAdmin />

        {/* Main Content */}
        <div className="tambah-kategori-container" style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <h2 className="title" style={{ textAlign: 'center', fontWeight: 'bold' }}>Tambah Kategori</h2>
          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            {/* Foto Upload */}
            <div className="foto-upload" style={{ marginBottom: '20px', textAlign: 'center' }}>
              {foto ? (
                <>
                  <img src={foto} alt="Preview" className="foto-preview" style={{ width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
                  <button
                    type="button"
                    className="btn-hapus-foto"
                    onClick={handleFotoHapus}
                    style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                  >
                    🗑 Hapus Foto
                  </button>
                </>
              ) : (
                <div
                  className="foto-placeholder"
                  onClick={handleFotoClick}
                  style={{
                    width: '150px',
                    height: '150px',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    margin: '0 auto'
                  }}
                >
                  <span className="plus-icon" style={{ fontSize: '3rem', color: '#ccc' }}>+</span>
                </div>
              )}
              <input
                type="file"
                id="fotoInput"
                accept="image/*"
                onChange={handleFotoChange}
                style={{ display: 'none' }}
              />
            </div>

            {/* Input Nama Kategori */}
            <div className="input-group" style={{ marginBottom: '20px', textAlign: 'center' }}>
              <label htmlFor="namaKategori" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nama Kategori</label>
              <input
                type="text"
                id="namaKategori"
                placeholder="Cth: Minuman"
                value={namaKategori}
                onChange={(e) => setNamaKategori(e.target.value)}
                required
                style={{
                  padding: '10px',
                  width: '80%',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  textAlign: 'center'
                }}
              />
            </div>

            {/* Tombol Simpan */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                className="btn-simpan"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TambahKategori;
