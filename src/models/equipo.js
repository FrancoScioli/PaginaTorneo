const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeamSchema = new Schema({
    name : { type: String, required: true},
    puntos : { type: Number},
    jugados: { type: Number},
    ganados: { type: Number},
    empatados: { type: Number},
    perdidos: { type: Number},
    gfavor: { type: Number},
    gcontra: { type: Number},
    dgol: { type: Number}
});

TeamSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});
TeamSchema.transform;


mongoose.model('Equipo',TeamSchema);

module.exports = mongoose.model('Equipo', TeamSchema);