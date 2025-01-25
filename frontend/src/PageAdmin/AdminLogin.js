import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/AdminLogin.css'; // Mengimpor file CSS khusus untuk AdminLogin

// Impor gambar logo
import Logo from '../Assets/Logo.png';

function AdminLogin() {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <div className="admin-login-container">
      <h2 className="font-1 text-center">SELAMAT DATANG</h2>
      <p className="card-text text-center">
        Kelola WizzMie dan kontrol semua pesanan di sini!
      </p>
      
      {/* Tambahkan gambar logo di sini */}
      <div className="text-center">
        <img src={Logo} alt="WizzMie Logo" className="Logo-image" />
      </div>

      <div className="d-grid gap-2">
        {/* Tombol untuk navigasi ke halaman Buat Akun Admin */}
        <button
          className="admin-login-button"
          type="button"
          onClick={() => navigate('/buatakunadmin')} // Navigasi ke /buatakunadmin
        >
          Buat Akun 
        </button>
        {/* Tombol untuk navigasi ke halaman Masuk Admin */}
        <button
          className="admin-login-button"
          type="button"
          onClick={() => navigate('/masukakunadmin')} // Navigasi ke /masukakunadmin
        >
          Masuk 
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
