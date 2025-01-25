const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Ganti dengan password database kamu
  database: 'dbwizzbitepw2', // Sesuaikan dengan nama database kamu
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
