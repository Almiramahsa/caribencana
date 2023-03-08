import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { LatLng, LatLngBounds } from 'leaflet';
import { coordinates } from '/src/data/Coordinates';
import '../styles/App.css';

function DisplayMap() {
  const [center, setCenter] = useState(new LatLng(-2.5, 117));
  const [zoom, setZoom] = useState(5);
  const indonesiaMap = new LatLngBounds(new LatLng(-11.05, 94.85), new LatLng(6.2, 141.05));

  function renderMarkers() {
    return coordinates.map((coord) => {
      const markerRadius = Math.sqrt(coord.total) * 0.4;

      const icon = L.divIcon({
        html: `<div style="background-color: rgba(255, 255, 255, 0.75); width: ${markerRadius}px; height: ${markerRadius}px; border-radius: 100%; display: flex; justify-content: center; align-items: center;"></div>`,
        className: 'custom-marker-icon',
      });

      return (
        <Marker key={coord.code} position={[coord.latitude, coord.longitude]} icon={icon}>
          <Tooltip>
            <div>
              <h3>{coord.name}</h3>
              <p>Publications: {coord.total}</p>
            </div>
          </Tooltip>
        </Marker>
      );
    });
  }

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '70vh' }} scrollWheelZoom={false} maxBounds={indonesiaMap} maxBoundsViscosity={1.0}>
      <TileLayer url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=o13sSPoD0cBH5pCHCAjP" attribution="<attribution>" />
      {renderMarkers()}
    </MapContainer>
  );
}

export default DisplayMap;
