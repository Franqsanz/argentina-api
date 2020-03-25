/* eslint-disable node/no-unpublished-require */
'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const csurf = require('csurf');
const expressRateLimit = require('express-rate-limit');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressPagination = require('express-simple-pagination');

const config = require('./config/config');
const cities = require('./routes/citiesRoutes');
require('./config/conexionDB');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(
  cors({
    methods: 'GET, POST, OPTIONS, PUT, DELETE'
  })
);
app.use(morgan('dev'));
app.use('/api/v1', cities);

app.listen(config.Port, () => console.log(`server on port ${config.Port}`));
