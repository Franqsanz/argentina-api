'use strict';
/* eslint-disable prettier/prettier */

const config = require('../config/config');
const { RESTDataSource } = require('apollo-datasource-rest');

// const baseUrl = `http://localhost:${config.Port}/api/v1/`;

class Provinces extends RESTDataSource {
    constructor() {
        super()
        // this.baseURL = `${baseURL}/province`,
        this.baseURL = `http://localhost:${config.Port}/api/v1`
    }

    async provinces() {
        const data = await this.get('/provinces')
        return data
    }
}

module.exports = Provinces;