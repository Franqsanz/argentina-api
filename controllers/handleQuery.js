'use strict';
/* eslint-disable prettier/prettier */

const provincesModel = require('../model/provinces');

function rmAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

async function query(req, res, next) {
    const capital = req.query.capital;

    if (capital) {
        for (const key in capital) {
            const regex = new RegExp(rmAccents(capital[key]), 'gi');

            const query = await provincesModel.find({ capital: regex });

            if (query.length < 1) return res.status(404).send('Is province does not exist');
            res.status(200).send(query);

        }
    }
    next();
}

module.exports = query