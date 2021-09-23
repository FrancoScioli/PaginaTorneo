import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playoff from './Playoff';
import { DataGrid } from '@material-ui/data-grid';
import '../styles/styles.css';
import { name } from 'file-loader';

const rows =  [
    { Nombre: "La Cantera", id: 1, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "Chicago", id: 2, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "Inter", id: 3, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "El Canalla", id: 4, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "Zona", id: 5, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "La Mercedes", id: 6, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "Atlas", id: 7, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "FC La Trinchera", id: 8, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "Holanda", id: 9, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "Atletico", id: 10, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "El Tambero", id: 11, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "Chelsea", id: 12, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "San Lorenzo", id: 13, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "Deja Vu", id: 14, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "Falso Dilema", id: 15, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "Racing De Nene", id: 16, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "Talleres", id: 17, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0},
    { Nombre: "CAI", id: 18, P: 0, PJ: 0, PG: 0, PE: 0, PP: 0, F: 0, C: 0, DG: 0}
];
const columns = [
    { field: 'Nombre', headerName: 'Nombre', width: 180 },
    { field: 'P', headerName: 'P', width: 130 },
    { field: 'PJ', headerName: 'PJ', width: 130 },
    { field: 'PG', headerName: 'PG', width: 130 },
    { field: 'PE', headerName: 'PE', width: 130 },
    { field: 'PP', headerName: 'PP', width: 130 },
    { field: 'F', headerName: 'F', width: 130 },
    { field: 'C', headerName: 'C', width: 130 },
    { field: 'DG', headerName: 'DG', width: 130 }
];


class Posiciones extends Component{
        getEquipos = () => {
            axios.get('/api/equipos')
                .then((response) => {
                    const data = response.data;
                    self.setState({ equipos: data });
                    console.log('Data has been received');
                    console.log(data);
                    return (data);

                })
                .catch(() => {
                    alert('error retrieving data');
                });
        };
        componentDidMount = () => {
            this.getEquipos();
        };




        getEquipos = () => {
            axios.get('/api/equipos')
                .then((response) => {
                    const data = response.data;
                    this.setState({ equipos: data });
                    console.log('Data has been received');
                    console.log(data);
                    return (data);

                })
                .catch(() => {
                    alert('error retrieving data');
                });
        };
        render(){
        return (
            <div style={{display:'flex', height: '600px', width: 'auto', position: 'relative'}}>
                <DataGrid colalign='center' hideFooter='true' rowHeight={25} className="tablaPosiciones" rows={rows} columns={columns} />
            </div>
        );}
    };

export default Posiciones;

