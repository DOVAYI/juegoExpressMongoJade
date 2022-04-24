var express = require('express');
var router = express.Router();

const gamer = require('../models/gamers');

const iftion = async () => {
  await gamer.find()
};

router.put('/', async (req, res, next) => {
  console.log("priedhdh")
  for (i = 0; i < iftion.length; i++) {
    console.log("priedhdh22222")
    await gamer.findByIdAndUpdate(iftion[i].id, {

      condition: true,
      winner: true
    });

  }


})

module.exports = router;
