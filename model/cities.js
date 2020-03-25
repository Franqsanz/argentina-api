'use strict';

/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const village = new Schema({
//     name: String,
//     populations: String
// });

// const department = new Schema({
//     name: String,
//     peoples: [village]
// });

const cities = new Schema({
    _id: Number,
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

module.exports = mongoose.model('cities', cities);
