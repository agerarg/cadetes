import React from "react";
import {Link} from 'react-router-dom';
const mainMenu = (props)=>{


    return (<div className="col-md-9">
    <nav className="menu" id="navigation">
        <ul className="nav wtf-menu" id="menu">
            <li >
                <Link to="/">Inicio</Link>
            </li>
            <li >
                <Link to="/plan" >Plan de Estudio</Link>
            </li>
            <li className="parent">
                <a >Horarios</a>
                <ul className="submenu">
                    <li>
                        <Link to="/horario/TT">COMICIÓN 1º (Turno Mañana)</Link>
                    </li>
                </ul>
            </li>
            
        </ul>
    </nav>
</div>)
}

export default mainMenu;
