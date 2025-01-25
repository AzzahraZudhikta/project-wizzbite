const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql2/promise');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Aktifkan CORS
app.use(cors({
  origin: 'http://localhost:3001', // URL frontend Anda
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metode HTTP yang diizinkan
  allowedHeaders: ['Content-Type'], // Header yang diizinkan
  credentials: true, // Izinkan pengiriman cookie atau header otentikasi
}));

// Middleware untuk parsing JSON
app.use(express.json());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Koneksi database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Sesuaikan dengan password database Anda
  database: 'dbwizzbitepw2', // Sesuaikan dengan nama database Anda
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// **Endpoint untuk Menu**

// **GET** Endpoint untuk mendapatkan semua menu
app.get('/api/menu', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM menu');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching menus:', err);
    res.status(500).json({ error: 'Gagal mengambil data dari server.' });
  }
});

// **POST** Endpoint untuk menambahkan menu
app.post('/api/menu', upload.single('gambar'), async (req, res) => {
  const { nama_menu, deskripsi, harga } = req.body;
  const gambar = req.file ? req.file.path : null;

  // Validasi input
  if (!nama_menu || !deskripsi || !harga) {
    return res.status(400).json({ error: 'Semua field harus diisi.' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO menu (nama_menu, deskripsi, harga, gambar) VALUES (?, ?, ?, ?)',
      [nama_menu, deskripsi, harga, gambar]
    );
    res.status(201).json({ id_menu: result.insertId, nama_menu, deskripsi, harga, gambar });
  } catch (err) {
    console.error('Error saving menu:', err);
    res.status(500).json({ error: 'Gagal menyimpan menu. Periksa kembali input Anda.' });
  }
});

// **PUT** Endpoint untuk memperbarui menu berdasarkan ID
app.put('/api/menu/:id', upload.single('gambar'), async (req, res) => {
  const { id } = req.params;
  const { nama_menu, deskripsi, harga } = req.body;
  const gambar = req.file ? req.file.path : null;

  try {
    const [result] = await pool.query(
      'UPDATE menu SET nama_menu = ?, deskripsi = ?, harga = ?, gambar = ? WHERE id_menu = ?',
      [nama_menu, deskripsi, harga, gambar, id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Menu tidak ditemukan.' });
    } else {
      res.json({ message: 'Menu berhasil diperbarui.' });
    }
  } catch (err) {
    console.error('Error updating menu:', err);
    res.status(500).json({ error: 'Gagal memperbarui menu.' });
  }
});

// **DELETE** Endpoint untuk menghapus menu berdasarkan ID
app.delete('/api/menu/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM menu WHERE id_menu = ?', [id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Menu tidak ditemukan.' });
    } else {
      res.json({ message: 'Menu berhasil dihapus.' });
    }
  } catch (err) {
    console.error('Error deleting menu:', err);
    res.status(500).json({ error: 'Gagal menghapus menu.' });
  }
});

// **Endpoint untuk Detail Pesanan**

// **CREATE** - Tambah Detail Pesanan
app.post('/api/detailpesanan', async (req, res) => {
  const { id_pesanan, id_menu, jumlah_pesan, subtotal } = req.body;

  // Validasi input
  if (!id_pesanan || !id_menu || !jumlah_pesan || !subtotal) {
    return res.status(400).json({ error: 'Semua field harus diisi.' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO detail_pesanan (id_pesanan, id_menu, jumlah_pesan, subtotal) VALUES (?, ?, ?, ?)',
      [id_pesanan, id_menu, jumlah_pesan, subtotal]
    );
    res.status(201).json({ id_detail_pesanan: result.insertId, id_pesanan, id_menu, jumlah_pesan, subtotal });
  } catch (err) {
    console.error('Error creating detail pesanan:', err);
    res.status(500).json({ error: 'Gagal menambahkan detail pesanan.' });
  }
});

// **READ** - Ambil Semua Detail Pesanan
app.get('/api/detailpesanan', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM detail_pesanan');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error fetching detail pesanan:', err);
    res.status(500).json({ error: 'Gagal mengambil data detail pesanan.' });
  }
});

// **READ** - Ambil Detail Pesanan by ID
app.get('/api/detailpesanan/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query('SELECT * FROM detail_pesanan WHERE id_detail_pesanan = ?', [id]);

    if (rows.length === 0) {
      res.status(404).json({ error: 'Detail pesanan tidak ditemukan.' });
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (err) {
    console.error('Error fetching detail pesanan:', err);
    res.status(500).json({ error: 'Gagal mengambil data detail pesanan.' });
  }
});

// **UPDATE** - Perbarui Detail Pesanan
app.put('/api/detailpesanan/:id', async (req, res) => {
  const { id } = req.params;
  const { id_pesanan, id_menu, jumlah_pesan, subtotal } = req.body;

  // Validasi input
  if (!id_pesanan || !id_menu || !jumlah_pesan || !subtotal) {
    return res.status(400).json({ error: 'Semua field harus diisi.' });
  }

  try {
    const [result] = await pool.query(
      'UPDATE detail_pesanan SET id_pesanan = ?, id_menu = ?, jumlah_pesan = ?, subtotal = ? WHERE id_detail_pesanan = ?',
      [id_pesanan, id_menu, jumlah_pesan, subtotal, id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Detail pesanan tidak ditemukan.' });
    } else {
      res.status(200).json({ message: 'Detail pesanan berhasil diperbarui.' });
    }
  } catch (err) {
    console.error('Error updating detail pesanan:', err);
    res.status(500).json({ error: 'Gagal memperbarui detail pesanan.' });
  }
});

// **DELETE** - Hapus Detail Pesanan
app.delete('/api/detailpesanan/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM detail_pesanan WHERE id_detail_pesanan = ?', [id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Detail pesanan tidak ditemukan.' });
    } else {
      res.status(200).json({ message: 'Detail pesanan berhasil dihapus.' });
    }
  } catch (err) {
    console.error('Error deleting detail pesanan:', err);
    res.status(500).json({ error: 'Gagal menghapus detail pesanan.' });
  }
});

// Jalankan server di port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});