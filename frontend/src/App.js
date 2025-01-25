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
import LaporanPengunjung from './PageAdmin/LaporanPengunjung.js';
import LaporanKeuangan from './PageAdmin/LaporanKeuangan.js';
import UlasanAdmin from './PageAdmin/UlasanAdmin.js';
import DetailPesanan from './PageAdmin/DetailPesanan.js';
import PesananAdmin from './PageAdmin/PesananAdmin.js';
import PesananDiproses from './PageAdmin/PesananDiproses.js';
import PesananDitolak from './PageAdmin/PesananDitolak.js';
import PesananSelesaiAdmin from './PageAdmin/PesananSelesaiAdmin.js';
import ProfilAdmin from './PageAdmin/ProfilAdmin.js';
import WizzmieAdmin from './PageAdmin/WizzmieAdmin.js';
import MinumanAdmin from './PageAdmin/MinumanAdmin.js';
import GenkDimsumAdmin from './PageAdmin/GenkDimsumAdmin.js';
import GenkSushiAdmin from './PageAdmin/GenkSushiAdmin.js';
import EditGenkDimsum from './PageAdmin/EditMenuAdminGenkDimsun.js'
import EditLevelMieDisko from './pages/EditLevelMieDisko.js';
import EditLevelMieManja from './pages/EditLevelMieManja.js';
import EditLevelMieGoyang from './pages/EditLevelMieGoyang.js';
import EditMenuAdminGenkSushi from './PageAdmin/EditMenuAdminGenkSushi.js';
import EditMenuAdminGenkDimsum from './PageAdmin/EditMenuAdminGenkDimsun.js';
import EditMenuAdminMinuman from './PageAdmin/EditMenuAdminMinuman.js';
import EditMenuAdminWizzmie from './PageAdmin/EditMenuAdminWizzmie.js';
import EditMieDisko from './pages/EditMieDisko.js';
import EditMieGoyang from './pages/EditMieGoyang.js';
import EditMieManja from './pages/EditMieManja.js';
import EditMinuman from './pages/EditMinuman.js';
import TambahLevelMieDisko from './PageAdmin/TambahLevelMieDisko.js';
import TambahLevelMieGoyang from './PageAdmin/TambahLevelMieGoyang.js';
import TambahMenuGenkDimsum from './PageAdmin/TambahMenuGenkDimsum.js';
import TambahMenuGenkSushi from './PageAdmin/TambahMenuGenkSushi.js';
import TambahMenuMinuman from './PageAdmin/TambahMenuMinuman.js';
import TambahMenuWizzmie from './PageAdmin/TambahMenuWizzmie.js';
import TambahKategori from './PageAdmin/TambahKategori.js';
import MenuAdmin from './PageAdmin/MenuAdmin.js'
import MieGoyangAdmin from './PageAdmin/MieGoyangAdmin.js';
import MieDiskoAdmin from './PageAdmin/MieDiskoAdmin.js';
import MieManjaAdmin from './PageAdmin/MieManjaAdmin.js';
import Dana from './pages/Dana.js';
import KodeOtp from './pages/KodeOtp.js';
import KodePin from './pages/KodePin.js';
import RincianPesananDana from './pages/RincianPesananDana.js';



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
        <Route path="/LaporanPengunjung" element={<LaporanPengunjung />} />
        <Route path="/LaporanKeuangan" element={<LaporanKeuangan />} />
        <Route path="/UlasanAdmin" element={<UlasanAdmin />} />
        <Route path="/DetailPesanan" element={<DetailPesanan />} />
        <Route path="/PesananAdmin" element={<PesananAdmin />} />
        <Route path="/PesananDiproses" element={<PesananDiproses />} />
        <Route path="/PesananDitolak" element={<PesananDitolak />} />
        <Route path="/PesananSelesaiAdmin" element={<PesananSelesaiAdmin />} />
        <Route path="/ProfilAdmin" element={<ProfilAdmin />} />
        <Route path="/MenuAdmin" element={<MenuAdmin />} />
        <Route path="/WizzmieAdmin" element={<WizzmieAdmin />} />
        <Route path="/MinumanAdmin" element={<MinumanAdmin />} />
        <Route path="/GenkDimsumAdmin" element={<GenkDimsumAdmin />} />
        <Route path="/GenkSushiAdmin" element={<GenkSushiAdmin />} />
        <Route path="/EditGenkDimsum" element={<EditGenkDimsum />} />
        <Route path="/EditLevelMieDisko" element={<EditLevelMieDisko />} />
        <Route path="/EditLevelMieManja" element={<EditLevelMieManja />} />
        <Route path="/EditLevelMieGoyang" element={<EditLevelMieGoyang />} />
        <Route path="/EditMenuAdminGenkSushi" element={<EditMenuAdminGenkSushi/>} />
        <Route path="/EditMenuAdminGenkDimsum" element={<EditMenuAdminGenkDimsum/>} />
        <Route path="/EditMenuAdminMinuman" element={<EditMenuAdminMinuman/>} />
        <Route path="/EditMenuAdminWizzmie" element={<EditMenuAdminWizzmie/>} />
        <Route path="/EditMieDisko" element={<EditMieDisko/>} />
        <Route path="/EditMieGoyang" element={<EditMieGoyang/>} />
        <Route path="/EditMiebv Manja" element={<EditMieManja/>} />
        <Route path="/EditMinuman" element={<EditMinuman/>} />
        <Route path="/TambahLevelMieDisko" element={<TambahLevelMieDisko />} />
        <Route path="/TambahLevelMieGoyang" element={<TambahLevelMieGoyang />} />
        <Route path="/TambahMenuGenkDimsum" element={<TambahMenuGenkDimsum />} />
        <Route path="/TambahMenuGenkSushi" element={<TambahMenuGenkSushi />} />
        <Route path="/TambahMenuMinuman" element={<TambahMenuMinuman />} />
        <Route path="/TambahMenuWizzmie" element={<TambahMenuWizzmie />} />
        <Route path="/TambahKategori" element={<TambahKategori />} />
        <Route path="/MenuAdmin" element={<MenuAdmin/>} />
        <Route path="/MieGoyangAdmin" element={<MieGoyangAdmin/>} />
        <Route path="/MieDiskoAdmin" element={<MieDiskoAdmin/>} />
        <Route path="/MieManjaAdmin" element={<MieManjaAdmin/>} />
        <Route path="/Dana" element={<Dana/>} />
        <Route path="/KodeOtp" element={<KodeOtp/>} />
        <Route path="/KodePin" element={<KodePin/>} />
        <Route path="/RincianPesananDana" element={<RincianPesananDana/>} />


        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
