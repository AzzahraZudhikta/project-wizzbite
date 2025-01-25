import React, { useState, useEffect } from 'react';
import { Button, Form, Modal, Table, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/detailpesanan'; // URL API backend

const DetailPesanan = () => {
  const [details, setDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentDetail, setCurrentDetail] = useState({
    id_pesanan: '',
    id_menu: '',
    jumlah_pesan: '',
    subtotal: '',
  });
  const [loading, setLoading] = useState(false); // State untuk loading
  const [error, setError] = useState(null); // State untuk menangani error

  // Mengambil detail pesanan dari API saat komponen dimuat
  useEffect(() => {
    fetchDetails();
  }, []);

  // Fungsi untuk mengambil data dari API
  const fetchDetails = async () => {
    setLoading(true); // Set loading true saat mulai mengambil data
    setError(null); // Reset error state
    try {
      const response = await axios.get(API_URL);
      setDetails(response.data);
    } catch (error) {
      setError('Gagal mengambil data. Pastikan backend berjalan dan endpoint benar.'); // Menangani error
    } finally {
      setLoading(false); // Set loading false setelah data diambil
    }
  };

  // Fungsi untuk menampilkan modal tambah/edit detail
  const handleShowModal = (detail = null) => {
    if (detail) {
      setCurrentDetail(detail);
      setEditMode(true);
    } else {
      setCurrentDetail({ id_pesanan: '', id_menu: '', jumlah_pesan: '', subtotal: '' });
      setEditMode(false);
    }
    setShowModal(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Fungsi untuk menangani perubahan pada form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentDetail({ ...currentDetail, [name]: value });
  };

  // Fungsi untuk menyimpan detail (Tambah/Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (editMode) {
        // Jika edit, lakukan update
        response = await axios.put(`${API_URL}/${currentDetail.id_detail_pesanan}`, currentDetail);
        setDetails((prevDetails) =>
          prevDetails.map((detail) =>
            detail.id_detail_pesanan === currentDetail.id_detail_pesanan ? { ...detail, ...response.data } : detail
          )
        );
      } else {
        // Jika tambah, lakukan insert
        response = await axios.post(API_URL, currentDetail);
        setDetails((prevDetails) => [...prevDetails, response.data]);
      }
      setShowModal(false);
    } catch (error) {
      console.error('Error saving detail:', error.response ? error.response.data : error.message);
    }
  };

  // Fungsi untuk menghapus detail
  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus detail ini?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchDetails(); // Menyegarkan data setelah penghapusan
      } catch (error) {
        console.error('Error deleting detail:', error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Detail Pesanan</h2>

      {error && <Alert variant="danger">{error}</Alert>} {/* Menampilkan pesan error jika ada */} 

      <Button variant="primary" onClick={() => handleShowModal()} style={{ marginBottom: '20px' }}>
        + Tambah Detail Pesanan
      </Button>

      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID Pesanan</th>
              <th>ID Menu</th>
              <th>Jumlah Pesan</th>
              <th>Subtotal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {details.length > 0 ? (
              details.map((detail, index) => (
                <tr key={detail.id_detail_pesanan}>
                  <td>{index + 1}</td>
                  <td>{detail.id_pesanan}</td>
                  <td>{detail.id_menu}</td>
                  <td>{detail.jumlah_pesan}</td>
                  <td>Rp {detail.subtotal}</td>
                  <td>
                    <Button variant="warning" onClick={() => handleShowModal(detail)}>
                      Edit
                    </Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(detail.id_detail_pesanan)}>
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>
                  Tidak ada detail pesanan yang tersedia
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit Detail Pesanan' : 'Tambah Detail Pesanan'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>ID Pesanan</Form.Label>
              <Form.Control
                type="number"
                name="id_pesanan"
                value={currentDetail.id_pesanan}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>ID Menu</Form.Label>
              <Form.Control
                type="number"
                name="id_menu"
                value={currentDetail.id_menu}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Jumlah Pesan</Form.Label>
              <Form.Control
                type="number"
                name="jumlah_pesan"
                value={currentDetail.jumlah_pesan}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subtotal</Form.Label>
              <Form.Control
                type="number"
                name="subtotal"
                value={currentDetail.subtotal}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editMode ? 'Simpan Perubahan' : 'Tambah Detail'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DetailPesanan;
