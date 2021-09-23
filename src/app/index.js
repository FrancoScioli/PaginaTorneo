import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Playoff from './components/Playoff';
import Resultado from './components/Resultado';

import App from './App';
import Admin from './Admin';
import { BrowserRouter } from 'react-router-dom';



render(<BrowserRouter><App/><Admin/></BrowserRouter>, document.getElementById("app"));