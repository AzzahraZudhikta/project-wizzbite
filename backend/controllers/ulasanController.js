const db = require('../config/db');

// Create Ulasan
const createUlasan = async (req, res) => {
  const { id_admin, id_user, id_pesanan, rating, komentar } = req.body;
  const waktu_ulasan = new Date();

  try {
    const [result] = await db.query(
      'INSERT INTO ulasan (id_admin, id_user, id_pesanan, rating, komentar, waktu_ulasan) VALUES (?, ?, ?, ?, ?, ?)',
      [id_admin, id_user, id_pesanan, rating, komentar, waktu_ulasan]
    );
    res.status(201).json({ message: 'Ulasan created', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Ulasan
const getAllUlasan = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM ulasan');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Ulasan by ID
const getUlasanById = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query('SELECT * FROM ulasan WHERE id_ulasan = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Ulasan not found' });
    }
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Ulasan
const updateUlasan = async (req, res) => {
  const { id } = req.params;
  const { id_admin, id_user, id_pesanan, rating, komentar } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE ulasan SET id_admin = ?, id_user = ?, id_pesanan = ?, rating = ?, komentar = ? WHERE id_ulasan = ?',
      [id_admin, id_user, id_pesanan, rating, komentar, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ulasan not found' });
    }
    res.status(200).json({ message: 'Ulasan updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Ulasan
const deleteUlasan = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM ulasan WHERE id_ulasan = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ulasan not found' });
    }
    res.status(200).json({ message: 'Ulasan deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUlasan,
  getAllUlasan,
  getUlasanById,
  updateUlasan,
  deleteUlasan,
};