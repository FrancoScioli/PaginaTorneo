const express = require('express');
const router = express.Router();

const Partido = require('../models/partido');


router.get('/', async(req,res)=>{
    fechas = await Fecha.find();
    console.log(fechas);
    res.json({
        fechas
    });
});

router.get('/:id', async(req,res)=>{
    const fecha = await Fecha.findById(req.params.id);
    res.json(fecha);
});

router.post('/', async(req,res)=>{
    const{numero,partidos} = req.body;
    const partido = new Partido({numero,partidos});
    await partido.save();
    res.json({status:'fecha guardada'});
});

router.put('/:numero', async (req,res) => {
    const {numero,partidos} = req.body;
    const newFecha = {numero,partidos};
    await Fecha.findOneAndUpdate(req.params.numero, newFecha);
    res.json({status: 'Fecha Actualizado'});
});

router.delete('/:numero', async (req,res)=>{
    await Fecha.findOneAndDelete(req.params.numero);
    res.json({status: 'Fecha Eliminada'});
})


module.exports = router;