const express = require('express');
const ulasanController = require('../controllers/ulasanController');

const router = express.Router();

router.post('/ulasan', ulasanController.createUlasan);
router.get('/ulasan', ulasanController.getAllUlasan);
router.get('/ulasan/:id', ulasanController.getUlasanById);
router.put('/ulasan/:id', ulasanController.updateUlasan);
router.delete('/ulasan/:id', ulasanController.deleteUlasan);

module.exports = router;