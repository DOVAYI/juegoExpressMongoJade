/**
 * esta funcion permite cargar toda la funcionalidad de express
 */
const express = require('express');

/**
 * manejador de ruta
 */
const router = express.Router();

/**
 * esta variable alcenara toda la informacion de los jugadores
 */
let iftion = null;

/**
 * almacena nobre ganador
 */
let nameWinner = "";

/**
 * carga el modelo gamers
 */
const gamer = require('../models/gamers');

/**
 * muestra la vista con jugadores activos a particpar
 */

router.get('/', async (req, res, next) => {

    /**
     * almacena solo los jugadores segun el estado(si ya jugaron o no)
     * en este caso solo carga jugadores,que no han jugado
     */
    iftion = await gamer.find({ condition: false }).exec();

    /**
     * numero aleatorio para elegir al ganador
     */
    let numberRandom = Math.floor(Math.random() * ((iftion.length) - 0)) + 0;

    /**
     * este ciclo permite cambiar estado de jugadores y capturar nombre
     * del ganador
     */
    for (i = 0; i < iftion.length; i++) {
        await gamer.findByIdAndUpdate(iftion[i].id, {
            condition: true,
        });
        if (i == numberRandom) {
            nameWinner = iftion[i].name;
        }

    }
    res.render('allPlayers', { iftion });

})
/**
 * muestra al ganador en la vista winner.jade
 */
router.get('/winner', (req, res, next) => {
    res.render('winner', { winner: nameWinner });
})

module.exports = router;