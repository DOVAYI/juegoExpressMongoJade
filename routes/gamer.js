const express = require('express');
const router = express.Router();

const gamer = require('../models/gamers');

router.get('/', async (req, res, next) => {
    //const info=gamer.find({condition:true}).exec();
    const iftion = await gamer.find();
    res.render('allPlayers', { iftion });


})

module.exports = router;