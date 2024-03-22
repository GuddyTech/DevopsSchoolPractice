import React, { useState } from 'react';
import axios from 'axios';

import './SignupService.css';

function SignupService() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Make a POST request to the server
      await axios.post('http://localhost:30225/signup', {
        username,
        email,
        password,
      });
      // If successful, alert the user
      alert('Signup successful');
    } catch (error) {
      // If an error occurs, log it to the console and alert the user
      console.error('Error signing up:', error);
      alert('Error signing up. Please check the console for more details.');
    }
  };

  return (
    <div className='signup-container'>
      <h2>Signup Service</h2>
      <h3 className='signup-title'>Create an Account</h3>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br></br> <br></br>

      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br></br> <br></br>

      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br></br> <br></br>

      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default SignupService;
