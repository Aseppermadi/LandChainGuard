import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Impor CSS Leaflet

const Map = ({ onCoordinateSelected }) => {
  const [position, setPosition] = useState(null);

  const LocationMarker = () => {
    const map = useMapEvents({
      click: (e) => {
        setPosition(e.latlng);
        onCoordinateSelected(e.latlng);
      }
    });

    return position === null ? null : (
      <Marker position={position} icon={new L.Icon({
        iconUrl: '/marker-icon.png', // Pastikan Anda memiliki ikon ini di folder public atau sesuaikan URLnya
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      })} />
    );
  };

  return (
    <MapContainer center={[-6.2088, 106.8456]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;