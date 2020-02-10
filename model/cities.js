/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const village = new Schema({
    name: String,
    populations: String
});

const department = new Schema({
    name: String,
    peoples: [village]
});

const cities = new Schema({
    city: String,
    rack: Number,
    latitude: Number,
    longitude: Number,
    populations: String,
    province: String,
    departments: [department]
}, { versionKey: false });

module.exports = mongoose.model('cities', cities);
