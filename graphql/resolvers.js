/* eslint-disable prettier/prettier */
'use strict';

const resolvers = {
    Query: {
        provinces: () => provinces()
    }
}

module.exports = resolvers;