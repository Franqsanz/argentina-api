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
    const provinces = await provincesModel.find().sort({ _id: 1 });
    return res.status(200).send(provinces);
}

async function getFindOneProvinces(req, res) {
    let _id = req.params.provinceId;

    const province = await provincesModel.findById({ _id });

    if (!province) return res.status(404).send('Is province does not exist');
    return res.status(200).send(province);
}

module.exports = {
    getHome,
    getProvincesAll,
    getFindOneProvinces
};
