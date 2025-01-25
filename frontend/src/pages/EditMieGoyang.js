import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'; // Import checkmark icon
import SidebarAdmin from '../ComponentsBerandaAdmin/SidebarAdmin';
import HeaderAdmin from '../ComponentsBerandaAdmin/HeaderAdmin';
import MieGoyang from '../Assets/Mie_goyang.jpg'; // Mengganti gambar dengan Mie_goyang.jpg

const EditMieGoyang = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('Mie Goyang'); // Default name menjadi "Mie Goyang"
  const [isSaved, setIsSaved] = useState(false); // State to check if saved

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update state as user types
  };

  const handleSave = () => {
    if (!inputValue.trim()) {
      alert('Nama menu tidak boleh kosong!');
      return;
    }

    setIsSaved(true); // Set state to true after save button is clicked

    // Show notification after save action
    setTimeout(() => {
      alert('Nama berhasil di edit'); // Show success message
      navigate('/WizzmieAdmin'); // Redirect to MenuAdmin after OK is clicked
    }, 1000); // Delay before showing notification
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* HeaderAdmin at the top */}
      <HeaderAdmin />
      <div style={{ display: 'flex', flex: 1 }}>
        <SidebarAdmin /> {/* Sidebar on the left */}
        <div className="main-content">
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '40px' }}>
            Edit Menu: {inputValue || 'Mie Goyang'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
            {/* Center the image and input */}
            <img
              src={MieGoyang}
              alt="Mie Goyang"
              style={{
                width: '300px',
                height: 'auto',
                borderRadius: '10px',
                marginBottom: '20px',
              }}
            />
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Masukkan nama menu"
              style={{
                width: '60%', // Set the input width to be less than full width
                padding: '10px',
                fontSize: '16px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
            <Button
              variant="success"
              onClick={handleSave}
              disabled={isSaved} // Disable button after saving
            >
              {isSaved ? <FaCheck style={{ color: 'white' }} /> : 'Simpan'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMieGoyang;
