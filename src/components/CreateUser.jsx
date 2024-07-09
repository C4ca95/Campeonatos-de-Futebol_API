import React from 'react';
import "./style/CreateUser.css";
import { Link, useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();

  const handleRegister = (event) => {
      event.preventDefault();
      // Adicione aqui a lógica para registrar o usuário

      // Após o registro bem-sucedido, redirecione o usuário para a página principal
      navigate("/menu");
  }

  return (
        <div className="wrapper">
            <div className="h1-centro">
                <h1>Bem vindo ao FutBR</h1>
            </div>
            <div className="container main">
                <div className="row">
                    <div className="col-md-6 side-image">
                    </div>
                    <div className="col-md-6 right">
                        <div className="input-box">
                            <header>Criar Conta</header>
                            <form onSubmit={handleRegister}>
                                <div className="input-field">
                                    <input type="text" className="input" id="email" required autoComplete="off" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field">
                                    <input type="password" className="input" id="password" required />
                                    <label htmlFor="password">Senha</label>
                                </div>
                                <div className="input-field">
                                    <input type="submit" className="submit" value="Registrar" />
                                </div>
                            </form>
                            <div className="signin">
                                <span>Já possui uma conta? <Link to="/login">Entre aqui</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;