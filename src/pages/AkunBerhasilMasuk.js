import React from 'react';
import { Button } from 'react-bootstrap';
import '../style/AkunBerhasilMasuk.css'; // Mengimpor file CSS untuk gaya

const AkunBerhasilMasuk = () => {
  return (
    <div className="login-container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Berhasil Masuk</h2>
              <p className="card-text text-center">
                Anda berhasil masuk ke akun Anda. Untuk melanjutkan,
                silakan klik Lanjutkan.
              </p>
              <p className="card-text text-center">Selamat Datang Kembali!</p>
              <div className="d-flex justify-content-center">
                <Button variant="primary" href="/Home">Lanjutkan</Button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkunBerhasilMasuk;