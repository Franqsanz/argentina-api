'use strict';
/* eslint-disable prettier/prettier */
/* eslint-disable node/no-unpublished-require */

const schema = require('./schema');

async function apiValidator(req, res, next) {
    try {
        await schema.validateAsync(req.body);
    } catch (error) {
        return res.status(400).send({ error: error.details[0].message });
    }
    next();
};

module.exports = apiValidator;