import React, { useState } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playoff from './Playoff';

function Fecha(){
    const fechasTorneo = [
        {fecha1: new Date(2021,7,24)},
        {fecha2: new Date(2021,7,31)},
        {fecha3: new Date(2021,7,31)},
        {fecha4: new Date(2021,8,7)},
        {fecha5: new Date(2021,8,14)},
        {fecha6: new Date(2021,8,21)},
        {fecha7: new Date(2021,8,28)},
        {fecha8: new Date(2021,9,4)},
        {fecha9: new Date(2021,9,11)},
        {fecha10: new Date(2021,9,18)},
        {fecha11: new Date(2021,9,25)},
        {fecha12: new Date(2021,10,2)},
        {fecha13: new Date(2021,10,9)},
        {fecha14: new Date(2021,10,16)},
        {fecha15: new Date(2021,10,23)},
        {fecha16: new Date(2021,10,30)},
        {fecha17: new Date(2021,11,6)}
    ]
    var date = new Date();
    const[fecha,setFecha] = useState(date);
    console.log(fecha);
    function proximaFecha(fecha){
        if (fecha<= fechasTorneo.fecha1){
            return (fechasTorneo.fecha1)
        }
        else if(fecha<= fechasTorneo.fecha2){
            return(fechasTorneo.fecha2)
        }
        else if(fecha<= fechasTorneo.fecha3){
            return(fechasTorneo.fecha3)
        }
        else if(fecha<= fechasTorneo.fecha4){
            return(fechasTorneo.fecha4)
        }
        else if(fecha<= fechasTorneo.fecha5){
            return(fechasTorneo.fecha5)
        }
        else if(fecha<= fechasTorneo.fecha6){
            return(fechasTorneo.fecha6)
        }
        else if(fecha<= fechasTorneo.fecha7){
            return(fechasTorneo.fecha7)
        }
        else if(fecha<= fechasTorneo.fecha8){
            return(fechasTorneo.fecha8)
        }
        else if(fecha<= fechasTorneo.fecha9){
            return(fechasTorneo.fecha9)
        }
        else if(fecha<= fechasTorneo.fecha10){
            return(fechasTorneo.fecha10)
        }
        else if(fecha<= fechasTorneo.fecha11){
            return(fecha11)
        }
        else if(fecha<= fechasTorneo.fecha12){
            return(fechasTorneo.fecha12)
        }
        else if(fecha<= fechasTorneo.fecha13){
            return(fechasTorneo.fecha13)
        }
        else if(fecha<= fechasTorneo.fecha14){
            return(fechasTorneo.fecha14)
        }
        else if(fecha<= fechasTorneo.fecha15){
            return(fechasTorneo.fecha15)
        }
        else if(fecha<= fechasTorneo.fecha16){
            return(fechasTorneo.fecha16)
        }
        else if(fecha<= fechasTorneo.fecha17){
            return(fechasTorneo.fecha17)
        }
        else{
            return(fechasTorneo.fecha1)
        }
    }
    
        return(
            <div>
                <h2></h2>
                    <div>{fechasTorneo.fecha1}</div>
                 
            </div>
        )
}

export default Fecha;