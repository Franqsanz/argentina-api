'use strict';
/* eslint-disable prettier/prettier */

const provincesModel = require('../model/provinces');

async function getProvincesAll(req, res) {
    // citiesModel.find((err, cities) => {
    //     res.send({ cities: cities });
    // });

    try {
        const provinces = await provincesModel.find();
        return res.status(200).send(provinces);
    } catch (error) {
        return res.status(500).send({ 'error': error });
    }
}

async function getFindOneProvinces(req, res) {
    // let cityId = req.params.cityId;
    // provincesModel.findById(cityId, (err, cities) => {
    //     res.send({ cities: cities });
    // });

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
    getProvincesAll,
    getFindOneProvinces
};
