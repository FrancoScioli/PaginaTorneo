import React, { useState } from 'react';
import { render } from 'react-dom';
import '../../styles/styles.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "react-router-dom";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

function NavBar(){
        return(
            <div>
                <Nav>                    
                        <NavMenu>
                            <NavLink className="nav-link" to="/" title="inicio">
                                INICIO
                            </NavLink>
                            <NavLink to="/Posiciones" className="nav-link" title="posiciones">
                                POSICIONES
                            </NavLink>
                            <NavDropdown title="FECHAS" id="nav-dropdown">
                                <LinkContainer to="/Fecha">
                                    <NavDropdown.Item>Próxima fecha</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Fecha 1</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 2</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 3</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 4</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 5</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 6</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 7</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 8</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 9</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 10</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 11</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 12</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 13</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 14</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 15</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 16</NavDropdown.Item>
                                <NavDropdown.Item>Fecha 17</NavDropdown.Item>
                            </NavDropdown>
                            <NavLink className="nav-link" to="/Equipos" title="equipos">
                                EQUIPOS
                            </NavLink>
                            <NavLink className="nav-link" to="/" title="goleadores">
                                GOLEADORES
                            </NavLink>
                            <NavLink className="nav-link" to="/Playoff" title="playoff">
                                PLAYOFF
                            </NavLink>
                            <NavLink className="nav-link" to="/" title="historial">
                                HISTORIAL
                            </NavLink>
                            <NavLink className="nav-link" target="_blank" download to="../public/reglamento.pdf"  title="descargar reglamento">
                                <a href="reglamento.pdf" download>REGLAMENTO</a>
                            </NavLink>
                    </NavMenu>
                </Nav>          
            </div>

        )
}

export default NavBar;