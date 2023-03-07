import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLng, LatLngBounds } from 'leaflet';
import { coordinates } from '/src/data/Coordinates';

function DisplayMap() {
  const [center, setCenter] = useState(new LatLng(-2.5, 117));
  const [zoom, setZoom] = useState(5);
  const indonesiaMap = new LatLngBounds(new LatLng(-11.05, 94.85), new LatLng(6.2, 141.05));

  function renderMarkers() {
    return coordinates.map((coord) => (
      <Marker key={coord.code} position={[coord.latitude, coord.longitude]}>
        <Popup>
          <div>
            <h3>{coord.name}</h3>
            <p>Publications: {coord.total}</p>
          </div>
        </Popup>
      </Marker>
    ));
  }

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100vh' }} maxBounds={indonesiaMap} maxBoundsViscosity={1.0}>
      <TileLayer url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=o13sSPoD0cBH5pCHCAjP" attribution="<attribution>" />
      {renderMarkers()}
    </MapContainer>
  );
}

export default DisplayMap;
