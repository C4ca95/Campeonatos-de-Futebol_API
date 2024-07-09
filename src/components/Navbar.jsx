import React from "react"
import "./style/CreateUser.css";
import { Link } from "react-router-dom";
import "./style/navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className="flex">
            <Link to="/">Página Inicial</Link>
            <Link to="consultar">Consultar Ligas</Link>
            <Link to="alterar">Alterar Liga</Link>
            <Link to="adicionar">adicionar ligas</Link>
            <Link to="deletar">deletar ligas</Link>
            </div>
        </nav>
    )
}

export default Navbar