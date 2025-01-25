const express = require('express');
const router = express.Router();
const detailPesananController = require('../controllers/detailPesananController');

// Menambahkan rute untuk mengambil dan menambahkan detail pesanan
router.get('/', detailPesananController.getAllDetailPesanan); // GET /api/detailpesanan
router.post('/', detailPesananController.createDetailPesanan); // POST /api/detailpesanan

module.exports = router;
