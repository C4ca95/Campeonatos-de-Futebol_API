import React from 'react';
import { Link } from 'react-router-dom';
import './style/menu-principal.css'
import './style/global.css'

const MenuPrincipal = () => {
  return (
      <div className="wrapper">
          <div className="main">
              <div className="menu-container">
                  <div className="menu-header">
                      Menu Principal
                  </div>
                  <div className="menu-item">
                    <a><Link to="/get-all-leagues">Mostrar todas Ligas</Link></a>
                  </div>
                  <div className="menu-item">
                    <a><Link to="/get-league-by-id">Consultar liga pelo Identificador</Link></a>
                  </div>
                  <div className="menu-item">
                    <a><Link to="/create-league">Criar Liga</Link></a>
                  </div>
                  <div className="menu-item">
                    <a><Link to="/update-league">Atualizar Liga</Link></a>
                  </div>
                  <div className="menu-item">
                    <a><Link to="/delete-league">Excluir Liga</Link></a>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default MenuPrincipal;
