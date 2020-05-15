'use strict';
/* eslint-disable prettier/prettier */

const { Port } = require('../config/config');
const provincesModel = require('../model/provinces');

async function getHome(req, res) {
    res.send({
        "provinces": `http://localhost:${Port}/api/v1/provinces`
    });
}

async function getProvincesAll(req, res) {
    try {
        const provinces = await provincesModel.find().sort({ _id: 1 });
        return res.status(200).send(provinces);
    } catch (error) {
        return res.status(500).send({ 'error': error });
    }
}

async function getFindOneProvinces(req, res) {
    try {
        let _id = req.params.provinceId;
        const province = await provincesModel.findById({ _id });
        if (!province) {
            return res.status(404).send('Is province does not exist');
        } else {
            return res.status(200).send(province);
        }
    } catch (error) {
        return res.status(500).send({ 'error': error });
    }
}

module.exports = {
    getHome,
    getProvincesAll,
    getFindOneProvinces
};
