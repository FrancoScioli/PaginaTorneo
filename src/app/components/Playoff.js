import React, { Component } from 'react';
import { render } from 'react-dom';
import '../styles/styles.css';
import logoLM from '../Images/logoCCLM.png';
import { Bracket, RoundProps } from 'react-brackets';

const rounds = [
  {
    title: 'Octavos',
    seeds: [
      {
        id: 1,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '1º' }, { name: 'Ganador 16º vs 17º' }],
      },
      {
        id: 2,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '2º' }, { name: 'Ganador 15º vs 18º' }],
      },
      {
        id: 3,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '3º' }, { name: '14º' }],
      },
      {
        id: 4,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '4º' }, { name: '13º' }],
      },
      {
        id: 5,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '5º' }, { name: '12º' }],
      },
      {
        id: 6,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '6º' }, { name: '11º' }],
      },
      {
        id: 7,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '7º' }, { name: '10º' }],
      },
      {
        id: 8,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '8º' }, { name: '9º' }],
      }
    ],
  },
  {
    title: 'Cuartos',
    seeds: [
      {
        id: 1,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '-' }, { name: '-' }],
      },
      {
        id: 2,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '-' }, { name: '-' }],
      },
      {
        id: 3,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '-' }, { name: '-' }],
      },
      {
        id: 4,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '-' }, { name: '-' }],
      },
    ],
  },
  {
    title: 'Semifinal',
    seeds: [
      {
        id: 1,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '-' }, { name: '-' }],
      },
      {
        id: 2,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '-' }, { name: '-' }],
      }
    ],
  },
  {
    title: 'Final',
    seeds: [
      {
        id: 1,
        date: /*new Date().toDateString()*/'fecha a confirmar',
        teams: [{ name: '-' },{ name: '-' }],
      }
    ]
  }
];

class Playoff extends Component{
    render(){
        return(
            <div>
                <Bracket rounds={rounds} />                
            </div>

        )
    }
}

export default Playoff;