import React, { useRef, useState } from 'react';
import osmProviders from '../osmProviders';
import { TileLayer, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '/src/styles/App.css';
function MapHero() {
  const ZOOM_LEVEL = 13;
  const mapRef = useRef();

  return (
    <div id="map" className="h-600 w-full">
      <MapContainer center={[119.8597, -0.9017]} zoom={ZOOM_LEVEL} ref={mapRef} className="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" tabIndex="0">
        <TileLayer url={osmProviders.maptiler.url} attribution={osmProviders.maptiler.attribution} />
      </MapContainer>
    </div>
  );
}

export default MapHero;
