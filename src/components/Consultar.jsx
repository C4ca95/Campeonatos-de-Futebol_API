import React from "react"
import "./style/CreateUser.css";
import "./style/deletar.css"

const Consultar = () => {
    return (
        <div className="centralizar">
            <div className="margin">
            <label htmlFor="id" className="id">Digite o Identificador para consultar as informações da liga!</label>
            <input type="number" />
            </div>
        </div>
    )
}
 
export default Consultar