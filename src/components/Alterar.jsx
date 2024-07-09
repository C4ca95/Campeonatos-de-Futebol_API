import React from "react"
import "./style/CreateUser.css";
import "./style/deletar.css"

const Alterar = () => {
    return (
        <div>
            <div className="centralizar">
            <div className="margin">
            <label htmlFor="id" className="id">Digite o Identificador para alterar os dados da liga!</label>
            <input type="number" />
            </div>
        </div>
        </div>
    )
}

export default Alterar