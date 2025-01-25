import React from 'react';
import { Link } from 'react-router-dom'; // 'Route' and 'Routes' are not needed in this component
import '../style/Opening.css';

const Opening = () => {
  return (
    <div className="opening-container">
      <Link to="/Login" className="brand-link" aria-label="Masuk ke akun Anda">
        <span className="font-1">Wizz</span>
        <span className="font-2">Bite</span>
      </Link>
    </div>
  );
};

export default Opening;
