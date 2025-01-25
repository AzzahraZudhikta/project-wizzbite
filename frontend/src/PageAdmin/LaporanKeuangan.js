import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import '../style/LaporanKeuangan.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const financeData = {
  daily: {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
    data: [2500000, 3000000, 3500000, 1500000, 2500000, 4500000, 6000000],
  },
  weekly: {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
    data: [15000000, 22000000, 20000000, 35000000],
  },
  monthly: {
    labels: [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ],
    data: [
      70000000, 80000000, 95000000, 89000000, 120000000, 75000000, 75000000, 60000000, 59000000, 72000000, 21000000, 45000000,
    ],
  },
  yearly: {
    labels: ['Tahun 2021', 'Tahun 2022', 'Tahun 2023', 'Tahun 2024'],
    data: [200000000, 450000000, 350000000, 500000000],
  },
};

const createChartData = (labels, data) => ({
  labels,
  datasets: [
    {
      label: 'Pendapatan (Rp)',
      data,
      backgroundColor: '#3f51b5',
      borderColor: '#303f9f',
      borderWidth: 1,
    },
  ],
});

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    tooltip: { enabled: true },
  },
  scales: {
    x: { beginAtZero: true },
    y: { beginAtZero: true },
  },
};

const LaporanKeuangan = () => {
  return (
    <div className="dashboard-overview">
      <HeaderAdmin />
      <div className="content-container">
        <SidebarAdmin />
        <div className="main-content">
          <div className="finance-report-container">
            <h2 className="finance-title">Laporan Keuangan</h2>
            <div className="charts-container">
              {['daily', 'weekly', 'monthly', 'yearly'].map((period, index) => (
                <div key={index} className="dashboard-chart">
                  <h3>{`Per ${
                    period === 'daily'
                      ? 'Hari'
                      : period === 'weekly'
                      ? 'Minggu'
                      : period === 'monthly'
                      ? 'Bulan'
                      : 'Tahun'
                  }`}</h3>
                  <Bar
                    data={createChartData(financeData[period].labels, financeData[period].data)}
                    options={options}
                  />
                </div>
              ))}
            </div>
            <div className="report-details">
              {['daily', 'weekly', 'monthly', 'yearly'].map((period, index) => (
                <div key={index} className="details-section">
                  <h3>{`Detail ${
                    period === 'daily'
                      ? 'Harian'
                      : period === 'weekly'
                      ? 'Mingguan'
                      : period === 'monthly'
                      ? 'Bulanan'
                      : 'Tahunan'
                  }`}</h3>
                  <table className="details-table">
                    <thead>
                      <tr>
                        <th>
                          {period === 'daily'
                            ? 'Hari'
                            : period === 'weekly'
                            ? 'Minggu'
                            : period === 'monthly'
                            ? 'Bulan'
                            : 'Tahun'}
                        </th>
                        <th>Pendapatan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {financeData[period].labels.map((label, idx) => (
                        <tr key={idx}>
                          <td>{label}</td>
                          <td>{financeData[period].data[idx].toLocaleString('id-ID')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporanKeuangan;
