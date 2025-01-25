import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import '../style/HomeAdmin.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
  datasets: [
    {
      label: 'Jumlah Pengunjung',
      data: [120, 150, 180, 200, 170, 220, 250],
      backgroundColor: '#4CAF50',
      borderColor: '#388E3C',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const HomeAdmin = () => {
  const navigate = useNavigate(); // Hook navigasi

  return (
    <div className="dashboard-overview">
      <HeaderAdmin />
      <div className="content-container">
        <SidebarAdmin />
        <div className="main-content">
          <div className="visitor-report-container">
            <h2 className="visitor-title">Laporan Pengunjung</h2>
            <div className="dashboard-chart">
              <Bar data={data} options={options} />
            </div>
            <button
              className="view-report-button"
              onClick={() => navigate('/LaporanPengunjung')}
            >
              Lihat Detail Laporan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;