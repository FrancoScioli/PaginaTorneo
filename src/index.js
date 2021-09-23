const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { mongoose } = require('./database');

//Aplication

const app = express();


// Settings 

app.set("port", process.env.PORT || 8000);

//Middlewares

app.use(morgan('dev'));
app.use(express.json());

//Routes

app.use('/api/equipos',require('./routes/equipos'));
app.use('/api/partidos',require('./routes/partidos'));
app.use('/api/fechas',require('./routes/fechas'));
app.use('/admin', require('./routes/admin'));



//Static files

app.use('/',express.static(path.join(__dirname, 'public')));



// Starting the server
/*
app.post();

app.delete();

app.put();

app.delete();
*/
app.listen(app.get("port"),()=>{
    console.log(`Server on port ${app.get("port")}`);
});