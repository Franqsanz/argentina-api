'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const joi = require('@hapi/joi');
const csurf = require('csurf');
const expressRateLimit = require('express-rate-limit');
const expressMongoSanitize = require('express-mongo-sanitize');

const config = require('./config/config');
const index = require('./routes/index');
const cities = require('./routes/citiesRoutes');
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
app.use('/api/v2', cities);

// validacion de campos
/*const schema = joi.object({
  username: joi
    .string()
    .alphanum()
    .min(3)
    .max(20)
    .required()
});

schema.validate();*/

app.listen(config.Port, () => console.log(`server on port ${config.Port}`));
