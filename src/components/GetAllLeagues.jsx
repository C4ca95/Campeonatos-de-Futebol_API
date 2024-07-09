import React, { useState, useEffect } from 'react';

const GetAllLeagues = () => {
  const [leagues, setLeagues] = useState([]);
  const [message, setMessage] = useState('');

  const fetchLeagues = () => {
    fetch('http://localhost:3000/campeonatos')
      .then(response => response.json())
      .then(data => setLeagues(data))
      .catch(error => console.error('Error fetching leagues:', error));
  };

  useEffect(() => {
    fetchLeagues();
  }, []);

  const handleRebase = () => {
    fetch('http://localhost:3000/rebase', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        fetchLeagues(); // Atualiza a lista de ligas após o rebase
      })
      .catch(error => console.error('Error rebasing data:', error));
  };

  return (
    <div>
      <h1>All Leagues</h1>
      <button onClick={handleRebase}>Rebase Data</button>
      {message && <p>{message}</p>}
      <ul>
        {leagues.map(league => (
          <li key={league.league_key}>
            {league.league_key} - {league.league_name} - {league.country_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetAllLeagues;
