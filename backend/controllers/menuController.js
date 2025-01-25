const { Menu } = require('../models'); // Pastikan sesuai dengan model Anda

// Get All Menus
const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.findAll(); // Query semua data dari tabel Menu
    res.status(200).json(menus); // Kirim data dalam bentuk JSON
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menus', error: error.message });
  }
};

module.exports = {
  getAllMenus,
  // Controller lainnya...
};
