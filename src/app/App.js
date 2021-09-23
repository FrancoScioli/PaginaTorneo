import React, { Component } from 'react';
import { render, ReactDOM } from 'react-dom';
import axios from 'axios';
import './styles/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playoff from './components/Playoff';
import Resultado from './components/Resultado';
import Posiciones from './components/Posiciones';
import Equipos from './components/Equipos';
import NavBar from './components/Navbar/index';
import Home from './components/Home';
import Fecha from './components/Fecha';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { createBrowserHistory } from 'history'

const browserHistory = createBrowserHistory();

class App extends Component{

    render(){
        return(
        <div id="holder"> 
        <Router history={browserHistory}>
          
            <Header/>
            <NavBar/>
            <div id="body">
            <Switch>
                <Route exact path="/" component={Home}>

                </Route>
                <Route exact path="/Playoff" component={Playoff}>
                    
                </Route>
                <Route exact path="/Fecha" component={Fecha}>
                    
                </Route>
                <Route exact path="/Posiciones" component={Posiciones}>
                    
                </Route>
                <Route exact path="/Resultado" component={Resultado}>
    
                </Route>
                <Route exact path="/Equipos" component={Equipos}>
    
                </Route>
            </Switch>
            </div>
            
            
            
         
        </Router>
        </div>
        )
    }
}

export default App;