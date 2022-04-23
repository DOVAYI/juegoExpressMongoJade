const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamerSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'El nombre del jugdor es Requerido']
    },
    condition: {
        type: Boolean
    },
    winner:{
        type:Boolean
    }

})

module.exports = Gamer = mongoose.model('Gamer', gamerSchema);

//video sofka minuto 49:19
//1:18:45