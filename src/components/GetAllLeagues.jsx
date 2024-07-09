import React, { useState, useEffect } from 'react';
import './style/get-all-leagues.css'
import './style/global.css'

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
    <div className="wrapper">
            <div className="main">
                <div className="leagues-container">
                  <button onClick={handleRebase} className="rebase-button">Restaurar Dados</button>
                    {leagues.map((league, index) => (
                        <div key={league.league_key} className="league-item">
                            <div className="league-info">
                                {league.league_key} - {league.league_name} - {league.country_name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  );
};

export default GetAllLeagues;
