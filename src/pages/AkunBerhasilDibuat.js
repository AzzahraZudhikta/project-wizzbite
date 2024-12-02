import React from 'react';
import { Button } from 'react-bootstrap';
import '../style/AkunBerhasilDibuat.css'; // Mengimpor file CSS untuk gaya

const AkunBerhasilDibuat = () => {
  return (
    <div className="login-container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Akun Berhasil Dibuat</h2>
              <p className="card-text text-center">
                Akun anda berhasil dibuat. Untuk masuk,
                silahkan klik Lanjutkan.
              </p>
              <p className="card-text text-center">Terima Kasih</p>
              <div className="d-flex justify-content-center">
                <Button variant="primary" href="/home">Lanjutkan</Button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkunBerhasilDibuat;