import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router
import Opening from './pages/Opening';
import Login from './pages/Login';
import BuatAkun from './pages/BuatAkun';
import MasukAkun from './pages/MasukAkun';
import AkunBerhasilMasuk from './pages/AkunBerhasilMasuk';
import Home from './pages/Home';
import AkunBerhasilDibuat from './pages/AkunBerhasilDibuat';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wizzmie from './pages/Wizzmie';
import GenkSushi from './pages/GenkSushi';
import GenkDimsum from './pages/GenkDimsum.js';
import Minuman from './pages/Minuman';
import MieGoyang from './pages/MieGoyang.js';
import MieManja from './pages/MieManja.js';
import MieDisko from './pages/MieDisko.js';
import Pesanan from './pages/Pesanan.js';
import TransferBank from './pages/TransferBank.js';
import Profil from './pages/Profil.js';
import UbahProfil from './pages/UbahProfil.js';
import Keluar from './pages/Keluar.js';
import BuktiTransfer from './pages/BuktiTransfer.js';
import UbahNomor from './pages/UbahNomor.js';
import Ulasan from './pages/Ulasan.js';
import BeriUlasan from './pages/BeriUlasan.js';
import LihatPenilaian from './pages/LihatPenilaian.js';
import PesananSelesai from './pages/PesananSelesai.js';
import RincianPesanan from './pages/RincianPesanan.js';
import NotifikasiTransfer from './pages/NotifikasiTransfer.js';
import OpeningAdmin from './PageAdmin/OpeningAdmin.js';
import AdminLogin from './PageAdmin/AdminLogin.js';
import BuatAkunAdmin from './PageAdmin/BuatAkunAdmin.js';
import AkunBerhasilDibuatAdmin from './PageAdmin/AkunBerhasilDibuatAdmin.js';
import MasukAkunAdmin from './PageAdmin/MasukAkunAdmin.js';
import AkunBerhasilMasukAdmin from './PageAdmin/AkunBerhasilMasukAdmin.js';
import HomeAdmin from './PageAdmin/HomeAdmin.js';


function App() {
  return (
    <Router> {/* Wrap your routes with Router */}
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/BuatAkun" element={<BuatAkun />} />
        <Route path="/MasukAkun" element={<MasukAkun />} />
        <Route path="/AkunBerhasilMasuk" element={<AkunBerhasilMasuk />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AkunBerhasilDibuat" element={<AkunBerhasilDibuat />} />
        <Route path="/Wizzmie" element={<Wizzmie />} />
        <Route path="/GenkSushi" element={<GenkSushi />} />
        <Route path="/GenkDimsum" element={<GenkDimsum />} />
        <Route path="/Minuman" element={<Minuman />} />
        <Route path="/MieGoyang" element={<MieGoyang />} />
        <Route path="/MieManja" element={<MieManja />} />
        <Route path="/MieDisko" element={<MieDisko />} />
        <Route path="/Pesanan" element={<Pesanan />} />
        <Route path="/TransferBank" element={<TransferBank />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/UbahProfil" element={<UbahProfil />} />
        <Route path="/Keluar" element={<Keluar />} />
        <Route path="/BuktiTransfer" element={<BuktiTransfer />} />
        <Route path="/UbahNomor" element={<UbahNomor />} />
        <Route path="/Ulasan" element={<Ulasan />} />
        <Route path="/BeriUlasan" element={<BeriUlasan />} />
        <Route path="/LihatPenilaian" element={<LihatPenilaian />} />
        <Route path="/PesananSelesai" element={<PesananSelesai />} />
        <Route path="/RincianPesanan" element={<RincianPesanan />} />
        <Route path="/NotifikasiTransfer" element={<NotifikasiTransfer />} />
        <Route path="/OpeningAdmin" element={<OpeningAdmin />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/BuatAkunAdmin" element={<BuatAkunAdmin />} />
        <Route path="/AkunBerhasilDibuatAdmin" element={<AkunBerhasilDibuatAdmin />} />
        <Route path="/MasukAkunAdmin" element={<MasukAkunAdmin />} />
        <Route path="/AkunBerhasilMasukAdmin" element={<AkunBerhasilMasukAdmin />} />
        <Route path="/HomeAdmin" element={<HomeAdmin />} />

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
