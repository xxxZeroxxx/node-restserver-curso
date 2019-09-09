const express = require('express');

const app = express();

//usar el archivo usuario.js
app.use(require('./usuario'));

//se debe incluir el archivo login
app.use(require('./login'));


module.exports = app;