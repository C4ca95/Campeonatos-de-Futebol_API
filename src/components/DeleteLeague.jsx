import React, { useState } from 'react';
import "./style/delete-league.css"

const DeleteLeague = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/campeonatos/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => setMessage('Liga deletada com sucesso!'))
    .catch(error => setMessage('Erro ao deletar liga:', error));
  };

  return (
    <div className="wrapper">
            <div className="main">
                <div className="delete-form-container">
                    <div className="delete-header">
                        Excluir Liga
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
                        <button type="submit" className="submit-button">Excluir</button>
                    </form>
                    {message && (
                        <div className="success-message">
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </div>
  )
}

export default DeleteLeague;
