const pool = require('../config/db'); // Memanggil koneksi database

// Mendapatkan semua detail pesanan
const getAllDetailPesanan = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM detail_pesanan');
    res.json(rows); // Mengirimkan data dalam format JSON
  } catch (err) {
    console.error('Error fetching detail pesanan:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Menambahkan detail pesanan baru
const createDetailPesanan = async (req, res) => {
  const { id_pesanan, id_menu, jumlah_pesan, subtotal } = req.body;
  const query = 'INSERT INTO detail_pesanan (id_pesanan, id_menu, jumlah_pesan, subtotal) VALUES (?, ?, ?, ?)';

  try {
    const [result] = await pool.query(query, [id_pesanan, id_menu, jumlah_pesan, subtotal]);
    res.status(201).json({ id_detail_pesanan: result.insertId, id_pesanan, id_menu, jumlah_pesan, subtotal });
  } catch (err) {
    console.error('Error creating detail pesanan:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllDetailPesanan,
  createDetailPesanan,
};
