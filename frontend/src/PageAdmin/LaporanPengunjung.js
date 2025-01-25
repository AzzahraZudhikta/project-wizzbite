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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const generateRandomData = (length, max) => {
  return Array.from({ length }, () => Math.floor(Math.random() * max));
};

const reportData = {
  daily: {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
    data: generateRandomData(7, 300),
  },
  weekly: {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
    data: generateRandomData(4, 1000),
  },
  monthly: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    data: generateRandomData(12, 5000),
  },
  yearly: {
    labels: ['2020', '2021', '2022', '2023'],
    data: generateRandomData(4, 20000),
  },
};

const createChartData = (labels, data) => ({
  labels,
  datasets: [
    {
      label: 'Jumlah Pengunjung',
      data,
      backgroundColor: '#4CAF50',
      borderColor: '#388E3C',
      borderWidth: 1,
    },
  ],
});

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

const LaporanPengunjung = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-overview">
      <HeaderAdmin />
      <div className="content-container">
        <SidebarAdmin />
        <div className="main-content">
          <div className="visitor-report-container">
            <h2 className="visitor-title">Laporan Pengunjung</h2>

            <div className="charts-container">
              <div className="dashboard-chart">
                <h3>Per Hari</h3>
                <Bar
                  data={createChartData(reportData['daily'].labels, reportData['daily'].data)}
                  options={options}
                />
              </div>
              <div className="dashboard-chart">
                <h3>Per Minggu</h3>
                <Bar
                  data={createChartData(reportData['weekly'].labels, reportData['weekly'].data)}
                  options={options}
                />
              </div>
              <div className="dashboard-chart">
                <h3>Per Bulan</h3>
                <Bar
                  data={createChartData(reportData['monthly'].labels, reportData['monthly'].data)}
                  options={options}
                />
              </div>
              <div className="dashboard-chart">
                <h3>Per Tahun</h3>
                <Bar
                  data={createChartData(reportData['yearly'].labels, reportData['yearly'].data)}
                  options={options}
                />
              </div>
            </div>

            <div className="report-details">
              <div className="details-section">
                <h3>Detail Harian</h3>
                <table className="details-table">
                  <thead>
                    <tr>
                      <th>Hari</th>
                      <th>Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData['daily'].labels.map((label, index) => (
                      <tr key={index}>
                        <td>{label}</td>
                        <td>{reportData['daily'].data[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="details-section">
                <h3>Detail Mingguan</h3>
                <table className="details-table">
                  <thead>
                    <tr>
                      <th>Minggu</th>
                      <th>Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData['weekly'].labels.map((label, index) => (
                      <tr key={index}>
                        <td>{label}</td>
                        <td>{reportData['weekly'].data[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="details-section">
                <h3>Detail Bulanan</h3>
                <table className="details-table">
                  <thead>
                    <tr>
                      <th>Bulan</th>
                      <th>Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData['monthly'].labels.map((label, index) => (
                      <tr key={index}>
                        <td>{label}</td>
                        <td>{reportData['monthly'].data[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="details-section">
                <h3>Detail Tahunan</h3>
                <table className="details-table">
                  <thead>
                    <tr>
                      <th>Tahun</th>
                      <th>Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData['yearly'].labels.map((label, index) => (
                      <tr key={index}>
                        <td>{label}</td>
                        <td>{reportData['yearly'].data[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .visitor-report-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .charts-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .dashboard-chart {
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 15px;
        }

        .report-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .details-section {
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 15px;
        }

        .details-section h3 {
          margin-bottom: 10px;
          font-size: 1.2rem;
          color: #333;
          text-align: center;
        }

        .details-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }

        .details-table th,
        .details-table td {
          padding: 10px;
          text-align: center;
          border: 1px solid #ddd;
        }

        .details-table th {
          background-color: #4caf50;
          color: white;
        }

        .details-table tr:nth-child(even) {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
};

export default LaporanPengunjung;