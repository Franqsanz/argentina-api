/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const products = new schema({
    producto: String,
    categoria: String,
    precio: Number,
    // date: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('products', products);
