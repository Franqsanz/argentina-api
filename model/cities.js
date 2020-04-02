'use strict';

/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const connet = require('../config/connectionDB');
// const increment = require('mongoose-auto-increment');

// increment.initialize(connet);

const cities = new Schema({
    _id: { type: Number },
    // cityId: { type: Schema.Types.ObjectId, ref: 'id' },
    city: {
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
    // departments: [department]
}, { versionKey: false });

// cities.plugin(connet.plugin, 'cities');
module.exports = mongoose.model('cities', cities);