/**
 * esta funcion permite cargar toda la funcionalidad de express
 */
const express = require('express');

/**
 * manejador de ruta
 */
const router = express.Router();

/**
 * muestra la vista index.jade
 */
router.get('/', (req, res, next) => {

    res.render('index', { title: 'Crear Jugadores' });

});

module.exports = router;
