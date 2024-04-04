import React, { useState } from 'react';
import axios from 'axios';

import './MapService.css';
import MapImage from './map.gif'; // Import your map image

function MapService() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [directions, setDirections] = useState('');

  const handleGetDirections = async () => {
    try {
      // Make a GET request to the server
      const response = await axios.get('http://localhost:30223/directions', {
        params: {
          origin,
          destination,
        },
      });
      // If successful, set the directions state
      setDirections(response.data.directions);
    } catch (error) {
      // If an error occurs, log it to the console and alert the user
      console.error('Error getting directions:', error);
      alert('Error getting directions. Please check the console for more details.');
    }
  };

  return (
    <div className='map-container'>
      <h2>Map Service</h2>
      <h3 className='map-title'>Get Directions</h3>
      <input
        type='text'
        placeholder='Origin'
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />

      <br></br> <br></br>

      <input
        type='text'
        placeholder='Destination'
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <br></br> <br></br>

      <button onClick={handleGetDirections}>Get Directions</button>
      {directions && (
        <div>
          <p>{directions}</p>
          <img src={MapImage} alt='Map' className='map-image' />
        </div>
      )}
    </div>
  );
}

export default MapService;
