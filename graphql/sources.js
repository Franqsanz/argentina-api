/* eslint-disable prettier/prettier */
'use strict';

const config = require('../config/config');
const { RESTDataSource } = require('apollo-datasource-rest');

const baseUrl = `http://localhost:${config.Port}/api/v1/`;

class Provinces extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = `${baseURL}/provinces`
    }

    async provinces({ filter, page }) {
        const data = await this.get('/', { ...filter, page })
        return data
    }
    async province({ _id }) {
        const data = await this.get('/' + _id)
        return data
    }
}

module.exports = Provinces;