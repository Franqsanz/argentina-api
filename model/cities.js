/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cities = new Schema({
    city: String,
    rack: Number,
    latitude: Number,
    longitude: Number,
    populations: Number,
    province: String
}, { versionKey: false });

module.exports = mongoose.model('cities', cities);
