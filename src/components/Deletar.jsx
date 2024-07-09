import React from "react"
import "./style/CreateUser.css";
import "./style/deletar.css"

const Deletar = () => {
    return (
        <div className="centralizar">
            <div className="margin">
            <label htmlFor="id" className="id">Digite o Identificador para deletar a liga!</label>
            <input type="number" />
            </div>
        </div>
    )
}

export default Deletar