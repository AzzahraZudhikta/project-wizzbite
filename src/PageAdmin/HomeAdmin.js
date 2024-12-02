import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin'; // Header sesuai desain
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin'; // Sidebar sesuai desain
import '../style/HomeAdmin.css';

// Registrasi elemen dan skala untuk Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data untuk grafik
const data = {
  labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'], // Label x-axis
  datasets: [
    {
      label: 'Jumlah Pengunjung',
      data: [120, 150, 180, 200, 170, 220, 250], // Data y-axis
      backgroundColor: '#4CAF50', // Warna batang grafik
      borderColor: '#388E3C', // Warna border batang
      borderWidth: 1, // Ketebalan border
    },
  ],
};

// Opsi untuk konfigurasi chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', // Posisi legenda
    },
    tooltip: {
      enabled: true, // Tampilkan tooltip
    },
  },
  scales: {
    x: {
      type: 'category', // Jenis skala sumbu x
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const HomeAdmin = () => {
  return (
    <div className="dashboard-overview">
      {/* Header */}
      <HeaderAdmin />

      {/* Main Content */}
      <div className="content-container">
        {/* Sidebar */}
        <SidebarAdmin />

        {/* Main Dashboard Content */}
        <div className="main-content">
          <div className="visitor-report-container">
            <h2 className="visitor-title">Laporan Pengunjung</h2>
            <div className="dashboard-chart">
              {/* Bar Chart */}
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
