const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const upload = require('../middlewares/upload');

// Create Menu
router.post('/', upload.single('gambar'), menuController.createMenu);

// Get All Menus
router.get('/', menuController.getAllMenus);

// Get Menu by ID
router.get('/:id', menuController.getMenuById);

// Update Menu
router.put('/:id', upload.single('gambar'), menuController.updateMenu);

// Delete Menu
router.delete('/:id', menuController.deleteMenu);

module.exports = router;