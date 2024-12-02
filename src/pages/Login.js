import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'; // Mengimpor file CSS khusus untuk AdminLogin

// Impor gambar
import Logo from '../Assets/Logo.png';

function Login() {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <div className="admin-login-container">
      <h2 className="font-1 text-center">SELAMAT DATANG</h2>
      <p className="card-text text-center">
        Jelajahi kelezatan WizzMie dan temukan hidangan favorit anda!
      </p>
      {/* Tambahkan gambar logo di sini */}
      <div className="text-center">
        <img src={Logo} alt="WizzMie Logo" className="Logo-image" />
      </div>
      <div className="d-grid gap-2">
        {/* Tombol untuk navigasi ke halaman Buat Akun */}
        <button
          className="admin-login-button"
          type="button"
          onClick={() => navigate('/buatakun')} // Navigasi ke /buatakun
        >
          Buat Akun
        </button>
        {/* Tombol untuk navigasi ke halaman Masuk */}
        <button
          className="admin-login-button"
          type="button"
          onClick={() => navigate('/masukakun')} // Navigasi ke /masukakun
        >
          Masuk
        </button>
      </div>
    </div>
  );
}

export default Login;
