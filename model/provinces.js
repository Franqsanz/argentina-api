'use strict';
/* eslint-disable prettier/prettier */

const mongoose = require('mongoose');
const { Schema } = mongoose;
// const autoIncrement = require('mongoose-sequence')(mongoose);

const provincesArgentina = new Schema({
    _id: Number,
    capitalCity: {
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
    }
}, { versionKey: false });

// cities.plugin(autoIncrement, { inc_field: ' id ' });
module.exports = mongoose.model('provincesArgentina', provincesArgentina);