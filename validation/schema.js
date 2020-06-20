'use strict';
/* eslint-disable prettier/prettier */

const joi = require('@hapi/joi');

const schema = joi.object({
    id: joi.number()
        .required(),
    capital: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'Capital debe ser de tipo String.',
            'string.empty': 'El campo capital no pude estar vacio.',
            'any.required': 'El campo capital es Obligatorio.'
        }),
    rank: joi.number()
        .required()
        .messages({
            'number.base': 'Rank debe ser de tipo Number',
            'number.empty': 'El campo Rank no pude estar vacio.',
            'any.required': 'El campo Rank es Obligatorio.'
        }),
    latitude: joi.number()
        .min(11)
        .max(11)
        .required()
        .messages({
            'number.base': 'Latitude debe ser de tipo Number.',
            'number.empty': 'El campo Latitude no pude estar vacio.',
            'number.min': 'El minimo de numeros que debe tener este campo es de 11 caracteres.',
            'number.max': 'El maximo de numeros que debe tener este campo es de 11 caracteres.',
            'any.required': 'El campo Latitude es Obligatorio.'
        }),
    longitude: joi.number()
        .min(11)
        .max(11)
        .required()
        .messages({
            'number.base': 'Longitude debe ser de tipo Number.',
            'number.empty': 'El campo Longitude no pude estar vacio.',
            'number.min': 'El minimo de numeros que debe tener este campo es de 11 caracteres.',
            'number.max': 'El maximo de numeros que debe tener este campo es de 11 caracteres.',
            'any.required': 'El campo Longitude es Obligatorio.'
        }),
    populations: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'Populations debe ser de tipo String.',
            'string.empty': 'El campo Populations no pude estar vacio.',
            'any.required': 'El campo Populations es Obligatorio.'
        }),
    province: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'Province debe ser de tipo String.',
            'string.empty': 'El campo Province no pude estar vacio.',
            'any.required': 'El campo Province es Obligatorio.'
        }),
    surface: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'Surface debe ser de tipo String.',
            'string.empty': 'El campo surface no pude estar vacio.',
            'any.required': 'El campo surface es Obligatorio.'
        }),
    foundation: joi.number()
        .min(4)
        .max(4)
        .required()
        .messages({
            'number.base': 'Foundation debe ser de tipo Number.',
            'number.empty': 'El campo Foundation no pude estar vacio.',
            'number.min': 'El minimo de numeros que debe tener este campo es de 4 caracteres.',
            'number.max': 'El maximo de numeros que debe tener este campo es de 4 caracteres.',
            'any.required': 'El campo Foundation es Obligatorio.'
        }),
    founder: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'Founder debe ser de tipo String.',
            'string.empty': 'El campo Founder no pude estar vacio.',
            'any.required': 'El campo Founder es Obligatorio.'
        }),
    geographic_region: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'Geographic region debe ser de tipo String.',
            'string.empty': 'El campo Geographic region no pude estar vacio.',
            'any.required': 'El campo Geographic region es Obligatorio.'
        })
});

module.exports = schema;