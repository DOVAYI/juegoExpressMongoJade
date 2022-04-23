const express = require('express');
const router = express.Router();

const Gamer = require('../models/gamers');

router.post('/', async (req, res, next) => {
    const gamer = new Gamer({
        name: req.body.name,
        condition: false,
        winner: false

    });

    await gamer.save()
    res.render('index', { title: 'Crear Jugadores' });


})

module.exports = router;