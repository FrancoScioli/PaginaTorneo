const mongoose = require('mongoose');
const { Schema } = mongoose;

const GameSchema = new Schema({
    equipoA : {type: String, required: true},
    equipoB : {type: String, required: true},
    golesA : {type: Number},
    golesB : {type: Number}
});

const FechaSchema = new Schema({
    numero : { type: Number, required: true,unique: true},
    partidos : {
        1:{GameSchema},
        2:{GameSchema},
        3:{GameSchema},
        4:{GameSchema},
        5:{GameSchema},
        6:{GameSchema},
        7:{GameSchema},
        8:{GameSchema},
        9:{GameSchema},
    }
});


mongoose.model('Fecha',FechaSchema);
module.exports = mongoose.model('Fecha', FechaSchema);

mongoose.model('Partido',GameSchema);
module.exports = mongoose.model('Partido', GameSchema);
