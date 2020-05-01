'use strict';
/* eslint-disable prettier/prettier */

const fetch = require('node-fetch');
const config = require('../config/config');
const provincesModel = require('../model/provinces');

let baseURL = `http://localhost:${config.Port}/api/v1/provinces`

const resolvers = {
    Query: {
        provinces: async () => {
            const res = await fetch(baseURL);
            return res.json();
        },

        province: async (_, { id }) => {
            const res = await fetch(`${baseURL}/${id}`);
            return res.json();
        }
    },

    Mutation: {
        newProvinces: async (parent, args) => {
            const province = {
                _id: args._id,
                capitalCity: args.capitalCity,
                rank: args.rank,
                latitude: args.latitude,
                longitude: args.longitude,
                populations: args.populations,
                province: args.province
            }

            console.log(args)
            const res = await fetch(baseURL, {
                method: 'POST',
                body: JSON.stringify(province),
                headers: { 'Content-Type': 'application/json' },

            });
            // provincesModel.create(province)
            return res.json();
        },
    }
}

module.exports = resolvers;