'use strict';
/* eslint-disable prettier/prettier */

const resolvers = {
    Query: {
        provinces: async (_, { dataSources }) => {
            await dataSources.province.provinces();
        }
    }
}

module.exports = resolvers;