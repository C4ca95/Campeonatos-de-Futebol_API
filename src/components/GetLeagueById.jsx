import React, { useState } from 'react';
import './style/get-league-id.css'
import './style/global.css'

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
    <div className="wrapper">
    <div className="main">
        <div className="league-container">
            <div className="league-header">
                Consultar liga pelo Identificador
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="input-field"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Insira o ID"
                    />
                </div>
                <button type="submit" className="submit-button">Achar</button>
            </form>
            {league && (
                <div className="league-info">
                    <p>Name: {league.league_name}</p>
                    <p>Country: {league.country_name}</p>
                </div>
            )}
        </div>
    </div>
</div> 

  );
};



export default GetLeagueById;
