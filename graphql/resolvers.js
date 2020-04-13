/* eslint-disable prettier/prettier */
'use strict';

// const fetch = require('node-fetch');

const resolvers = {
    Query: {
        provinces: () => provinces()
    }
}

// function fetchProvinces() {
//     return fetch('http://localhost:33528/api/v1/provinces')
//         .then(res => res.json())
//         .then(data => data.provinces)
// }

module.exports = resolvers;