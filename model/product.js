/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const products = new schema({
    producto: String,
    categoria: String,
    precio: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('products', products);
