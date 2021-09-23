const express = require('express');
const router = express.Router();

const Partido = require('../models/partido');


router.get('/', async(req,res)=>{
    partidos = await Partido.find();
    console.log(partidos);
    res.json({
        partidos
    });
});

router.get('/:id', async(req,res)=>{
    const partido = await Partido.findById(req.params.id);
    res.json(partido);
});

router.post('/', async(req,res)=>{
    const{equipoA,equipoB,golesA,golesB} = req.body;
    const partido = new Partido({equipoA,equipoB,golesA,golesB});
    await partido.save();
    res.json({status:'partido guardado'});
});

router.put('/:id', async (req,res) => {
    const { equipoA , equipoB , golesA , golesB } = req.body;
    const newPartido = { equipoA , equipoB , golesA , golesB };
    await Partido.findByIdAndUpdate(req.params.id, newPartido);
    res.json({status: 'Partido Actualizado'});
});

router.delete('/:id', async (req,res)=>{
    await Partido.findByIdAndDelete(req.params.id);
    res.json({status: 'Partido Eliminado'});
})


module.exports = router;