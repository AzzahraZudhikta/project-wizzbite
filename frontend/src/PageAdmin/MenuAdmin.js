import React, { useState, useEffect } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/menu';

const MenuAdmin = () => {
  const [menus, setMenus] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentMenu, setCurrentMenu] = useState({
    id_menu: '',
    nama_menu: '',
    deskripsi: '',
    harga: '',
    gambar: null,
  });

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log('Response from API:', response.data);
      setMenus(response.data);
    } catch (error) {
      console.error('Error fetching menus:', error.message || error);
    }
  };

  const handleShowModal = (menu = null) => {
    if (menu) {
      setCurrentMenu(menu);
      setEditMode(true);
    } else {
      setCurrentMenu({ id_menu: '', nama_menu: '', deskripsi: '', harga: '', gambar: null });
      setEditMode(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentMenu({ ...currentMenu, [name]: value });
  };

  const handleFileChange = (e) => {
    setCurrentMenu({ ...currentMenu, gambar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nama_menu', currentMenu.nama_menu);
    formData.append('deskripsi', currentMenu.deskripsi);
    formData.append('harga', currentMenu.harga);
    if (currentMenu.gambar) {
      formData.append('gambar', currentMenu.gambar);
    }

    try {
      let response;
      if (editMode) {
        response = await axios.put(`${API_URL}/${currentMenu.id_menu}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setMenus((prevMenus) =>
          prevMenus.map((menu) =>
            menu.id_menu === currentMenu.id_menu ? { ...menu, ...response.data } : menu
          )
        );
      } else {
        response = await axios.post(API_URL, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setMenus((prevMenus) => [...prevMenus, response.data]);
      }
      setShowModal(false); // Tutup modal
    } catch (error) {
      console.error('Error saving menu:', error.response?.data || error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus menu ini?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchMenus();
      } catch (error) {
        console.error('Error deleting menu:', error);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Menu Admin</h2>
      <Button variant="primary" onClick={() => handleShowModal()} style={{ marginBottom: '20px' }}>
        + Tambah Menu
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Menu</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Gambar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {menus.length > 0 ? (
            menus.map((menu, index) => (
              <tr key={menu.id_menu}>
                <td>{index + 1}</td>
                <td>{menu.nama_menu}</td>
                <td>{menu.deskripsi}</td>
                <td>Rp {menu.harga}</td>
                <td>
                  {menu.gambar ? (
                    <img
                      src={`http://localhost:3000/${menu.gambar}`}
                      alt={menu.nama_menu}
                      style={{ width: '100px', height: 'auto' }}
                    />
                  ) : (
                    <span>Tidak ada gambar</span>
                  )}
                </td>
                <td>
                  <Button variant="warning" onClick={() => handleShowModal(menu)}>
                    Edit
                  </Button>{' '}
                  <Button variant="danger" onClick={() => handleDelete(menu.id_menu)}>
                    Hapus
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>
                Tidak ada menu yang tersedia
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit Menu' : 'Tambah Menu'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nama Menu</Form.Label>
              <Form.Control
                type="text"
                name="nama_menu"
                value={currentMenu.nama_menu}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                name="deskripsi"
                value={currentMenu.deskripsi}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={currentMenu.harga}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gambar</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editMode ? 'Simpan Perubahan' : 'Tambah Menu'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MenuAdmin;