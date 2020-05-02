'use strict';
/* eslint-disable prettier/prettier */

const fetch = require('node-fetch');
const config = require('../config/config');

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
    }
}

module.exports = resolvers;