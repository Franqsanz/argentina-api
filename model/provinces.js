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
        required: true
    },
    longitude: {
        type: Number,
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
        required: true
    }
}, options);

module.exports = mongoose.model('provinces', provinces);