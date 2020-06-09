'use strict';
/* eslint-disable prettier/prettier */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const options = {
    versionKey: false
}

const provinces = new Schema({
    _id: Number,
    capital: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        max: 11,
        min: 11,
        required: true
    },
    longitude: {
        type: Number,
        max: 11,
        min: 11,
        required: true
    },
    populations: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    foundation: {
        type: Number,
        required: true
    },
    founder: {
        type: String,
        max: 4,
        min: 4,
        required: true
    },
    geographic_region: {
        type: String,
        required: true
    }
}, options);

module.exports = mongoose.model('provinces', provinces);