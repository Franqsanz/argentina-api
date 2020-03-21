'use strict';

/* eslint-disable prettier/prettier */
const citiesModel = require('../model/cities');

function getCities(req, res) {
    citiesModel.find((err, cities) => {
        res.send({ cities: cities });
    });
}

function getFindOneCities(req, res) {
    let cityId = req.params.cityId;
    citiesModel.findById(cityId, (err, cities) => {
        res.send({ cities: cities });
    });
}

function putCities(req, res) {
    let cityId = req.params.cityId;
    let updated = req.body;

    citiesModel.findByIdAndUpdate(cityId, updated, (err, cityUpdate) => {
        res.status(200).send({
            mensaje: 'Esta ciudad se a actualizado',
            citiesModel: cityUpdate
        });
    });
}

function postCities(req, res) {
    let newCity = new citiesModel({
        _id: req.body.id,
        city: req.body.city,
        rank: req.body.rank,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        populations: req.body.populations,
        province: req.body.province,
        // departments: {
        //     name: req.body.department,
        //     peoples: {
        //         name: req.body.village,
        //         populations: req.body.populationsPeoples,
        //     }
        // }
    });

    newCity.save((err, data) => console.log(data));
    res.redirect('/api/v1/cities')
}

function deleteCities(req, res) {
    let cityId = req.params.cityId;

    citiesModel.findById(cityId, (err, cityDelete) => {
        cityDelete.remove(() => {
            res.send({
                mensaje: 'Esta ciudad a sido borrada',
                citiesModel: cityDelete
            });
        });
    });
}

module.exports = {
    getCities,
    getFindOneCities,
    putCities,
    postCities,
    deleteCities
};
