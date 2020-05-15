'use strict';

require('dotenv').config();
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

const { Port } = require('./config/config');
const provinces = require('./routes/provinces');
const server = require('./graphql/index');
require('./config/connectionDB');

const app = express();

app.use(
  helmet({
    xssFilter: true,
    frameguard: true,
    hsts: true,
    hidePoweredBy: true,
    noSniff: true
  })
);
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(mongoSanitize({ replaceWith: '_' }));
// Routes
app.use('/api/v1', provinces);

// GraphQL
server.applyMiddleware({ app });

app.all('*', (req, res) => res.status(404).send('Page Not Found'));

app.listen(Port, () =>
  console.log(`
    REST ➡  http://localhost:${Port}/api/v1/provinces
    GraphQL ➡  http://localhost:${Port}${server.graphqlPath}
  `)
);

module.exports = app;
