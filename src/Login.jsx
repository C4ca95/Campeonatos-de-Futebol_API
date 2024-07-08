import React, { useState } from 'react';
import "./Login.css"

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email:', email);
        console.log('Senha:', password);
    }

  return (
    <>
      <div className="wrapper">
      <div className="h1-centro">
        <h1>Bem vindo ao FutBR</h1>
      </div>
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image"></div>
          <div className="col-md-6 right">
            <div className="input-box">
              <header>Criar Conta</header>
              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <input
                    type="text"
                    className="input"
                    id="email"
                    required
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    className="input"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Senha</label>
                </div>
                <div className="input-field">
                  <input type="submit" className="submit" value="Registrar" />
                </div>
              </form>
              <div className="signin">
                <span>Já possui uma conta? <a href="#">Entre aqui</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    </>
  )
}

export default Login