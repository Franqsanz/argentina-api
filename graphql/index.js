'use strict';
/* eslint-disable prettier/prettier */

const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const server = new ApolloServer({
    typeDefs, resolvers,
    playground: true,
    introspection: true
});

module.exports = server;
