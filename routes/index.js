var express = require('express');
var router = express.Router();

const gamer = require('../models/gamers');
/* GET home page. */
router.get('/', async (req, res, next) => {
  
res.render('index', {title:'Crear Jugadores'});

});

module.exports = router;
