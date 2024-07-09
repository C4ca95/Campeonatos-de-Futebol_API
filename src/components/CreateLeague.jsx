import React, { useState } from 'react';

const CreateLeague = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/campeonatos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ league_name: name, country_name: country })
    })
    .then(response => response.json())
    .then(data => setMessage('League created successfully'))
    .catch(error => setMessage('Error creating league:', error));
  };

  return (
    <div>
      <h1>Create League</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter League Name"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter Country Name"
        />
        <button type="submit">Create League</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateLeague;
