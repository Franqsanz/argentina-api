/* eslint-disable node/no-unpublished-require */
'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// const csurf = require('csurf');
// const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
// const pagination = require('express-simple-pagination');

const config = require('./config/config');
const provinces = require('./routes/provinces');
require('./config/connectionDB');

const app = express();

app.use(
  helmet({
    xssFilter: true,
    frameguard: true,
    hsts: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  mongoSanitize({
    replaceWith: '_'
  })
);

// CORS
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1', provinces);

app.listen(config.Port, () => console.log(`server on port ${config.Port}`));
