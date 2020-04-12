/* eslint-disable prettier/prettier */
'use strict';

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Provinces {
        _id: ID
        city: String
        rank: Int
        latitude: Int
        longitude: Int
        populations: String
        province: String
    }
    type Query {
        ## province(id: ID!): Provinces
        provinces: [Provinces]
    }
`;

module.exports = typeDefs;