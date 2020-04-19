'use strict';
/* eslint-disable prettier/prettier */

const provincesModel = require('../model/provinces');

const getProvincesAll = async (req, res) => {
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

const getFindOneProvinces = async (req, res) => {
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

const putProvinces = async (req, res) => {
    // let cityId = req.params.cityId;
    // let updated = req.body;

    // provincesModel.findByIdAndUpdate(cityId, updated, (err, cityUpdate) => {
    //     res.status(200).send({
    //         mensaje: 'Esta ciudad se a actualizado',
    //         provincesModel: cityUpdate
    //     });
    // });

    try {
        let _id = req.params.provinceId;
        const {
            capitalCity,
            rank,
            latitude,
            longitude,
            populations,
            province
        } = req.body;

        let provinceUpdate = await provincesModel.findOne({ _id });

        if (!provinceUpdate) {
            provinceUpdate = await provincesModel.create({
                capitalCity,
                rank,
                latitude,
                longitude,
                populations,
                province
            });
            return res.status(201).send(provinceUpdate);
        } else {
            provinceUpdate.capitalCity = capitalCity
            provinceUpdate.rank = rank
            provinceUpdate.latitude = latitude
            provinceUpdate.longitude = longitude
            provinceUpdate.populations = populations
            provinceUpdate.province = province

            await provinceUpdate.save();
            return res.status(200).send(provinceUpdate);
        }
    } catch (error) {
        return res.status(500).send({ 'error': error });
    }
}

const postProvinces = async (req, res) => {
    // let newCity = new provincesModel({
    //     _id: req.body.id,
    //     city: req.body.city,
    //     rank: req.body.rank,
    //     latitude: req.body.latitude,
    //     longitude: req.body.longitude,
    //     populations: req.body.populations,
    //     province: req.body.province
    // });

    // newCity.save((err, data) => console.log(data));
    // res.redirect('/api/v1/cities')

    try {
        const _id = req.body.id;
        const {
            capitalCity,
            rank,
            latitude,
            longitude,
            populations,
            province
        } = req.body;

        const provinces = await provincesModel.create({
            _id,
            capitalCity,
            rank,
            latitude,
            longitude,
            populations,
            province
        });
        return res.status(200).send(provinces);
    } catch (error) {
        return res.status(500).send({ 'error': error });
    }
}

const deleteProvinces = async (req, res) => {
    // let cityId = req.params.cityId;

    // provincesModel.findById(cityId, (err, cityDelete) => {
    //     cityDelete.remove(() => {
    //         res.send({
    //             mensaje: 'Esta ciudad a sido borrada',
    //             provincesModel: cityDelete
    //         });
    //     });
    // });

    try {
        let _id = req.params.provinceId;
        const province = await provincesModel.deleteOne({ _id });
        if (province.deletedCount === 0) {
            return res.status(404).send();
        } else {
            return res.status(200).send('Elimination province');
        }
    } catch (error) {
        return res.status(500).send({ 'error': error });
    }
}

module.exports = {
    getProvincesAll,
    getFindOneProvinces,
    putProvinces,
    postProvinces,
    deleteProvinces
};
