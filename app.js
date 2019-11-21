'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// const joi = require('@hapi/joi');

const config = require('./config/config');
const index = require('./routes/index');
require('./config/conexionDB');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use(
  cors({
    methods: 'GET, POST, OPTIONS, PUT, DELETE'
  })
);
// configuracion de CORS para transportar la API
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Acces-Control-Allow-Headers',
//     'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Methond'
//   );
//   res.header('Acces-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

app.use(morgan('dev'));
app.use('/', index);

app.listen(config.Port, () => console.log(`server on port ${config.Port}`));
