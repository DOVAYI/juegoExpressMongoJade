
/**
 * controlar los errores generadas por peticiones HTTP
 */
const createError = require('http-errors');

/**
 * esta funcion permite cargar toda la funcionalidad de express
 */
const express = require('express');

/**
 * nos permite poder manejar las rutas
 */
const path = require('path');

/**
 * esta funcion me permite configurar las cookies
 */
const cookieParser = require('cookie-parser');

/**
 * este funcion me permite registrar los request
 */
const logger = require('morgan');

/**
 * esta funcion me permite leer el cuerpo y luego analizarlo en un objeto Json.
 */
const bodyParser = require('body-parser');

/**
 * permite crear un Modelo basado en un esquema específico
 */
const mongoose = require('mongoose');

/**
 * ruta de conexion a  base de datos
 */
const mongodb = 'mongodb://localhost/juego';

/**
 * permite la conexion con base de datos
 */
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Conectado'))
  .catch(err => console.log(err));

/**
 * recibe la funcionalidad de express
 */
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/', require('./routes/index'));
app.use('/gamerAll', require('./routes/gamer'));
app.use('/creategamer', require('./routes/create-gamer'));

/**
 * captura 404 y reenvía al controlador de errores
 */
app.use(function (req, res, next) {
  next(createError(404));
});

 /**
 * controlador de errores
 */
app.use(function (err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  /**
   * controlador de errores
   */
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
