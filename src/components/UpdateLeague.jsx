import React, { useState } from 'react';
import "./style/update-league.css"

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
    <div className="wrapper">
            <div className="main">
                <div className="update-form-container">
                    <div className="update-header">
                        Atualizar Liga
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="input-field"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                placeholder="Insira o ID"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="input-field"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Insira o nome da Liga"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="input-field"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="Insira o País"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Atualizar</button>
                    </form>
                    {message && (
                        <div className="success-message">
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </div>
  );
};

export default UpdateLeague;
