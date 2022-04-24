const express = require('express');
const router = express.Router();
let iftion = null;
let nameWinner = "";

const gamer = require('../models/gamers');

router.get('/', async (req, res, next) => {
    //const info=gamer.find({condition:true}).exec();
    iftion = await gamer.find({ condition: false }).exec();
    let numberRandom = Math.floor(Math.random() * ((iftion.length) - 0)) + 0;
    for (i = 0; i < iftion.length; i++) {

        await gamer.findByIdAndUpdate(iftion[i].id, {

            condition: true,
            //winner: true
        });
        if (i == numberRandom) {
            nameWinner = iftion[i].name;
        }

    }
    res.render('allPlayers', { iftion });

})

router.get('/winner', (req, res, next) => {


    res.render('winner', { winner: nameWinner });


})



module.exports = router;