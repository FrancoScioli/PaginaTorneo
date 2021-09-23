import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import '../../styles/styles.css';
import { NavLink as Link } from 'react-router-dom';


function Ddown(){
    const [click,setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
        return(
            <div className="Ddown">
                <ul>
                    <li>
                        <Link className="nav-link" to="/" title="inicio">
                            INICIO
                        </Link>
                    </li>
                    <li>
                        <Link to="/Posiciones" className="nav-link" title="posiciones">
                            POSICIONES
                        </Link>
                    </li>
                    <li>
                        <Link to="/Fechas" className="nav-link" title="fechas">
                            FECHAS
                        </Link>
                    </li>
                    <li>
                        <Link to="/Equipos" className="nav-link" title="equipos">
                            EQUIPOS
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link" title="goleadores">
                            GOLEADORES
                        </Link>
                    </li>
                    <li>
                        <Link to="/Playoff" className="nav-link" title="playoff">
                            PLAYOFF
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link" title="historial">
                            HISTORIAL
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" target="_blank" download to="../public/reglamento.pdf"  title="descargar reglamento">
                                <a href="reglamento.pdf" download>REGLAMENTO</a>
                        </Link>
                    </li>
                </ul>
            </div>

        )
}

export default Ddown;