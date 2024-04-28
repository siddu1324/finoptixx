import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      const data = await response.json();
      console.log('Login successful:', data.token);
      window.location.href = '/';  
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed: ' + error.message);
    }
  };

  const formStyle = {
    backgroundColor: 'lightgrey',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    margin: 'auto',
    marginTop: '50vh', 
    transform: 'translateY(-50%)', 
    width: '300px',
    height: '300px',
    marginLeft: 'auto', 
    marginRight: '200px' 
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 2px',
    display: 'block',
    width: '80%',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    backgroundColor: 'purple',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    cursor: 'pointer',
    width: '90%',
    opacity: '0.9'
  };

  const lineStyle = {
    position: 'absolute',
    width: '1px',
    height: '100%', 
    backgroundColor: 'white',
    left: '-50%', 
    transform: 'translateX(-50%)', 
  };

  const imageStyle = {
    position: 'absolute',
    left: '130px', 
    top: '50%', 
    transform: 'translateY(-50%)',
    width: '400px',
    height: '300px',
    
  };

  return (
    <div style={{backgroundColor: '#000',  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <img src="/logo.png" alt="Your Image" style={imageStyle} />
      <form onSubmit={handleLogin} style={formStyle}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          style={inputStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={buttonStyle}>Login</button>
        <div style={lineStyle}></div> {}
      </form>
    </div>
  );
}

export default LoginPage;
