/* eslint-disable node/no-unpublished-require */
'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// const csurf = require('csurf');
const mongoSanitize = require('express-mongo-sanitize');
// const pagination = require('express-simple-pagination');
const { ApolloServer } = require('apollo-server-express');

const config = require('./config/config');
const provinces = require('./routes/provinces');
require('./config/connectionDB');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
  // dataSources: () => ({
  //   provinces: () => new provinces()
  // })
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(
  mongoSanitize({
    replaceWith: '_'
  })
);

// CORS
app.use(cors());
// Routes
app.use('/api/v1', provinces);

server.applyMiddleware({ app });

app.listen(config.Port, () =>
  console.log(`
  REST http://localhost:${config.Port}/api/v1/provinces
  GraphQL http://localhost:${config.Port}${server.graphqlPath}
  `)
);
