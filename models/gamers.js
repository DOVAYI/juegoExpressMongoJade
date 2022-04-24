/**
 * permite crear un Modelo basado en un esquema específico
 */
const mongoose = require('mongoose');

/**
 * esquemq  a seguir
 */
const Schema = mongoose.Schema;

/**
 * se instancia el objeto con esquema
 * se definen los datos y los tipos de ellos
 */

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

