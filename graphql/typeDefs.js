'use strict';
/* eslint-disable prettier/prettier */

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Provinces {
        _id: ID
        capitalCity: String
        rank: Int
        latitude: String
        longitude: String
        populations: String
        province: String
    }

    type Province {
        _id: ID
        capitalCity: String
        rank: Int
        latitude: String
        longitude: String
        populations: String
        province: String
    }

    type Query {
        province(id: ID): Province
        provinces: [Provinces]
    }

    type Mutation {
        newProvinces (_id: Int capitalCity: String! rank: Int! latitude: String! longitude: String! populations: String! province: String!): Provinces!

        updateProvinces (_id: ID capitalCity: String! rank: Int! latitude: String! longitude: String! populations: String! province: String!): Provinces!

        deleteProvinces (_id: ID): Provinces!
    }
`;

module.exports = typeDefs;