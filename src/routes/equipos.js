const express = require('express');
const router = express.Router();

const Equipo = require('../models/equipo');


router.get('/', async(req,res)=>{
    equipos = await Equipo.find();
    console.log(equipos.transfrom);
    console.log(equipos);
    res.json({
        equipos
    });
});


router.post('/', async (req,res) =>{
    const {name, puntos} = req.body;
    const equipo = new Equipo({name,puntos});
    await equipo.save();
    res.json({status:'equipo guardado'});
});

module.exports = router;