import React, { useState } from 'react';

const DeleteLeague = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/campeonatos/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => setMessage('League deleted successfully'))
    .catch(error => setMessage('Error deleting league:', error));
  };

  return (
    <div>
      <h1>Delete League</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter League ID"
        />
        <button type="submit">Delete League</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteLeague;
