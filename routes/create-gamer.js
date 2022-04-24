/**
 * esta funcion permite cargar toda la funcionalidad de express
 */
const express = require('express');

/**
 * manejador de ruta
 */
const router = express.Router();

/**
 * carga el modelo gamers
 */
const Gamer = require('../models/gamers');

/**
 * permite guardar al jugador
 * se usa async y await para manejo de promesas
 */

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