import React, { useState } from 'react';
import "./style/create-league.css"

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
    <div className="wrapper">
            <div className="main">
                <div className="league-form-container">
                    <div className="league-header">
                        Criar Liga
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="input-field"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Insira nome da Liga"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="input-field"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="Insira nome do país"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Criar</button>
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

export default CreateLeague;
