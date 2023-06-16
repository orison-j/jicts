import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Map = () => {
    const containerStyle = {
        width: '100%',
        height: '400px',
      };
    
      const center = {
        lat: 4.772310840539022,  // Latitude coordinate for the map center
        lng: 7.013384425370948, // Longitude coordinate for the map center
      };
    
      return (
        <LoadScript googleMapsApiKey={process.env.MAP_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      );
}

export default Map


