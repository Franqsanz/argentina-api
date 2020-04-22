'use strict';
/* eslint-disable prettier/prettier */

const resolvers = {
    Query: {
        provinces: async (parent, { provinces }, { dataSources }) => {
            await dataSources.provinceApi.provinces({ provinces });
        }
        // province: async (parent, args, { provinceId }, { dataSources }) => {
        //     // const { _id } = args
        //     dataSources.province.province({ provinceId });
        // }
    }
}

module.exports = resolvers;