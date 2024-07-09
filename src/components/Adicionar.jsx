import React from "react"
import "./style/CreateUser.css";

const Adicionar = () => {
    return (
        <div>
            <div className="centralizar">
            <div className="margin">
            <label htmlFor="nomeLiga" className="nomeLiga">Digite o nome da Liga</label>
            <input type="text" />
            <label htmlFor="paisLiga" className="paisLiga">Digite o País da Liga</label>
            <input type="text" />
            </div>
        </div>
        </div>
    )
}

export default Adicionar