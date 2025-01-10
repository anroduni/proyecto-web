const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// Usar middlewares correctamente
app.use(logger('dev')); // Middleware de logging
app.use(bodyParser.json()); // Middleware para parsear JSON
app.use(bodyParser.urlencoded({ extended: false })); // Middleware para parsear formularios
app.use(cookieParser()); // Middleware para cookies

// Rutas de ejemplo
app.get('/h', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Si hay errores en las rutas
app.use((req, res, next) => {
  const err = new Error('No encontrado');
  err.status = 404;
  next(err);
});

// Manejador de errores
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;
