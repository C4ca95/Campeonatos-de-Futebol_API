import React, { useState } from 'react';

const GetLeagueById = () => {
  const [id, setId] = useState('');
  const [league, setLeague] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/campeonatos/${id}`)
      .then(response => response.json())
      .then(data => setLeague(data))
      .catch(error => console.error('Error fetching league:', error));
  };

  return (
    <div>
      <h1>Get League by ID</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter League ID"
        />
        <button type="submit">Fetch League</button>
      </form>
      {league && (
        <div>
          <h2>{league.league_name}</h2>
          <p>Country: {league.country_name}</p>
        </div>
      )}
    </div>
  );
};

export default GetLeagueById;
