import React, { Component } from 'react';
import { render } from 'react-dom';
import '../styles/styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import atlas from '../Images/escudos/atlas.jpeg'
import atletico from '../Images/escudos/atletico.jpeg'
import cai from '../Images/escudos/cai.jpeg'
import chelsea from '../Images/escudos/chelsea.jpeg'
import chicago from '../Images/escudos/chicago.jpeg'
import dejavu from '../Images/escudos/dejavu.jpeg'
import canalla from '../Images/escudos/elcanalla.jpeg'
import eltambero from '../Images/escudos/eltambero.jpeg'
import falsodilema from '../Images/escudos/falsodilema.jpeg'
import holanda from '../Images/escudos/holanda.jpeg'
import inter from '../Images/escudos/inter.jpeg'
import lacantera from '../Images/escudos/lacantera.jpeg'
import latrinchera from '../Images/escudos/latrinchera.jpeg'
import mercedes from '../Images/escudos/mercedes.jpeg'
import racing from '../Images/escudos/racingdenene.jpeg'
import sanlorenzo from '../Images/escudos/sanlorenzo.jpeg'
import talleres from '../Images/escudos/talleres.jpeg'
import zona from '../Images/escudos/zona.jpeg'
import { Container } from '@material-ui/core';



class Equipos extends Component{
    render(){
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <p>Atlas</p>
                        <img src={atlas}></img>
                    </Col>
                    <Col>
                        <p>Atletico</p>
                        <img src={atletico}></img>
                    </Col>
                    <Col>
                        <p>CAI</p>
                        <img src={cai}></img>
                    </Col>
                    <Col><img src={chelsea}></img></Col>
                    <Col><img src={chicago}></img></Col>
                    <Col><img src={dejavu}></img></Col>
                </Row>
                <Row>
                    <Col><img src={canalla}></img></Col>
                    <Col><img src={eltambero}></img></Col>
                    <Col><img src={falsodilema}></img></Col>
                    <Col><img src={holanda}></img></Col>
                    <Col><img src={inter}></img></Col>
                    <Col><img src={lacantera}></img></Col>
                </Row>
                <Row>
                    <Col><img src={latrinchera}></img></Col>
                    <Col><img src={mercedes}></img></Col>
                    <Col><img src={racing}></img></Col>
                    <Col><img src={sanlorenzo}></img></Col>
                    <Col><img src={talleres}></img></Col>
                    <Col><img src={zona}></img></Col>
                </Row>
            </Container>
        </div>
    );}
};

export default Equipos;