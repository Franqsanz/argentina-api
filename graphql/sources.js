'use strict';
/* eslint-disable prettier/prettier */

const config = require('../config/config');
const { RESTDataSource } = require('apollo-datasource-rest');

const baseURL = `http://localhost:${config.Port}/api/v1`

class ProvinceApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = baseURL
    }

    async provinces() {
        return this.get('/provinces')
    }

    // async province({ provinceId }) {
    //     const data = await this.get('/' + provinceId)
    //     return data
    // }
}

module.exports = { ProvinceApi };