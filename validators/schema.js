/* eslint-disable prettier/prettier */
/* eslint-disable node/no-unpublished-require */
'use strict';

const joi = require('@hapi/joi');

const schema = joi.object({
    city: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'El Campo City es Obligatorio.',
            'string.empty': 'El Campo City no pude estar vacio.'
        }),
    rank: joi.number()
        .required()
        .messages({
            'number.base': 'El Campo Rank es Obligatorio y debe ser un Numero.',
            'string.empty': 'El Campo Rank no pude estar vacio.'
        }),
    latitude: joi.number()
        .required()
        .messages({
            'number.base': 'El Campo Latitude es Obligatorio y debe ser un Numero.',
            'string.empty': 'El Campo Latitude no pude estar vacio.'
        }),
    longitude: joi.number()
        .required()
        .messages({
            'number.base': 'El Campo Longitude es Obligatorio y debe ser un Numero.',
            'string.empty': 'El Campo Longitude no pude estar vacio.'
        }),
    populations: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'El Campo Populations es Obligatorio.',
            'string.empty': 'El Campo Populations no pude estar vacio.'
        }),
    province: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'El Campo Province es Obligatorio.',
            'string.empty': 'El Campo Province no pude estar vacio.'
        })
});

module.exports = schema;