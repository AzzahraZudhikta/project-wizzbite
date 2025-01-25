import React from 'react';
import { Link } from 'react-router-dom';
import '../style/OpeningAdmin.css';

const OpeningAdmin = () => {
  return (
    <div className="opening-container">
      <Link to="/AdminLogin" className="brand-link" aria-label="Masuk ke halaman Admin">
        <span className="font-1">Wizz</span>
        <span className="font-2">Bite</span>
      </Link>
    </div>
  );
};

export default OpeningAdmin;