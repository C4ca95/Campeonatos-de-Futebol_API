import React, { useState } from 'react';

const UpdateLeague = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/campeonatos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ league_name: name, country_name: country })
    })
    .then(response => response.json())
    .then(data => setMessage('League updated successfully'))
    .catch(error => setMessage('Error updating league:', error));
  };

  return (
    <div>
      <h1>Update League</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter League ID"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter New League Name"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter New Country Name"
        />
        <button type="submit">Update League</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateLeague;
