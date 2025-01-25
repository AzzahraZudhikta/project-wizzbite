import React from "react";
import { Link } from "react-router-dom";
import SidebarAdmin from "../ComponentsBerandaAdmin/SidebarAdmin";
import HeaderAdmin from "../ComponentsBerandaAdmin/HeaderAdmin";
import "../style/PesananSelesai.css";

function PesananSelesai() {
  const orders = [
    {
      id: 1,
      name: "Bunga Gayati",
      paymentMethod: "Transfer Bank",
      total: "Rp. 83.500",
    },
  ];

  return (
    <div className="dashboard-container">
      <HeaderAdmin />
      <div className="dashboard-content">
        <SidebarAdmin />

        <div className="main-content">
          <div className="order-container">
            <h2 className="order-title">Pesanan Selesai</h2>
            <section className="order-list">
              <h3 className="order-subtitle">Daftar Pesanan</h3>
              {orders.map((order) => (
                <div key={order.id} className="order-card">
                  <div className="order-info">
                    <p className="order-id">Pesanan {order.id}</p>
                    <p className="order-name">Pesanan atas nama: {order.name}</p>
                    <p className="order-method">Metode Pembayaran: {order.paymentMethod}</p>
                    <p className="order-total">Total: {order.total}</p>
                  </div>
                  <div className="order-action">
                    <Link to={`/PesananAdmin`} className="detail-button">
                      Selesai
                    </Link>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PesananSelesai;
