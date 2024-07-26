import React, { useState } from 'react';
import Modal from '../modal';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../maps'), {
  ssr: false
});

const Testing = () => {
  const [inputData, setInputData] = useState({
    nomorSertifikat: '',
    pemilik: '',
    coordinates: []
  });
  const [modal, setModal] = useState({ isOpen: false, isLoading: true, message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleCoordinateSelected = (latlng) => {
    setInputData({ ...inputData, coordinates: [...inputData.coordinates, latlng] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setModal({ isOpen: true, isLoading: true, message: '' }); // Tampilkan modal dengan loader
    try {
      const response = await fetch('http://210.79.191.25/blockchain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log('Data submitted:', responseData);
      setModal({ isOpen: true, isLoading: false, message: "DATA BERHASIL TERINPUT" });
    } catch (error) {
      console.error('Failed to submit data:', error);
      setModal({ isOpen: true, isLoading: false, message: "INPUT DATA TIDAK BERHASIL" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-8">
      <Modal isOpen={modal.isOpen} isLoading={modal.isLoading} message={modal.message} onClose={() => setModal({ isOpen: false, isLoading: true, message: '' })} />
      <h1 className="text-4xl font-bold mb-4">INPUT TESTING</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mt-1">
        <h2 className="text-2xl font-bold mb-4">Form Data Pertanahan</h2>
        <div className="mb-4">
          <label htmlFor="nomorSertifikat" className="block text-gray-700 text-sm font-bold mb-2">Nomor Sertifikat</label>
          <input
            type="text"
            id="nomorSertifikat"
            name="nomorSertifikat"
            value={inputData.nomorSertifikat}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>    
        <div className="mb-4">
          <label htmlFor="pemilik" className="block text-gray-700 text-sm font-bold mb-2">Pemilik</label>
          <input
            type="text"
            id="pemilik"
            name="pemilik"
            value={inputData.pemilik}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Koordinat Maps</h3>
          <MapWithNoSSR onCoordinateSelected={handleCoordinateSelected} />
          <ul>
            {inputData.coordinates.map((coord, index) => (
              <li key={index}>Lat: {coord.lat}, Lng: {coord.lng}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default Testing;