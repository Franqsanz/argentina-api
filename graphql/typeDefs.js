'use strict';
/* eslint-disable prettier/prettier */

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Provinces {
    _id: ID
    capital: String
    rank: Int
    latitude: Float
    longitude: Float
    populations: String
    province: String
    foundation: Int
    founder: String
    geographic_region: String
  }

  type Province {
    _id: ID
    capital: String
    rank: Int
    latitude: Float
    longitude: Float
    populations: String
    province: String
    foundation: Int
    founder: String
    geographic_region: String
  }

#   input filterProvinces {
#     capital: String
#   }

  type Query {
    province(id: ID!): Province
    # provinces(filter: filterProvinces): [Provinces]
    provinces: [Provinces]
  }
`;

module.exports = typeDefs;
