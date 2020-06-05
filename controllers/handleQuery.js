'use strict';
/* eslint-disable prettier/prettier */

const provincesModel = require('../model/provinces');

async function query(req, res, next) {
    const capital = req.query.capital;

    if (capital) {
        for (const key in capital) {
            console.log(capital[key])
            const regex = new RegExp(capital[key], 'gi');

            const query = await provincesModel.find({ capital: regex });

            if (query.length < 1) return res.status(404).send('Is province does not exist');
            res.status(200).send(query);

        }
    }
    next();
}

module.exports = query