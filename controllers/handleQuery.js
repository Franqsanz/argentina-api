'use strict';
/* eslint-disable prettier/prettier */

const provincesModel = require('../model/provinces');

function replaceAccents(chain) {
    const chars = { "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u", "ñ": "n" }

    const expr = /[áéíóúñ]/ig;
    const res = chain.replace(expr, (e) => chars[e]);
    return res
}

async function query(req, res, next) {
    const capital = req.query.capital;

    if (capital) {
        for (const key in capital) {
            // console.log(capital[key])
            const regex = new RegExp(replaceAccents(capital[key]), 'gi');
            // const regex = new RegExp(capital[key], 'gi');

            const query = await provincesModel.find({ capital: regex });

            if (query.length < 1) return res.status(404).send('Is province does not exist');
            res.status(200).send(query);

        }
    }
    next();
}

module.exports = query