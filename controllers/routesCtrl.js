/* eslint-disable prettier/prettier */
const citiesModel = require('../model/cities');

function getApiCities(req, res) {
    citiesModel.find((err, cities) => {
        res.send({ cities: cities });
    });
}

function getFindOneApiCities(req, res) {
    let cityId = req.params.cityId;
    citiesModel.findById(cityId, (err, cities) => {
        res.send({ cities: cities });
    });
}

function putApiCities(req, res) {
    let cityId = req.params.cityId;
    let updated = req.body;

    citiesModel.findByIdAndUpdate(cityId, updated, (err, cityUpdate) => {
        res.status(200).send({
            mensaje: 'su producto a sido actualizado',
            citiesModel: cityUpdate
        });
    });
}

function postApiCities(req, res) {
    let newCity = new citiesModel({
        city: req.body.city,
        rack: req.body.rack,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        populations: req.body.populations,
        province: req.body.province
    });

    newCity.save((err, data) => console.log(data));
    res.redirect('/api/v2/cities')
}

function deleteApiCities(req, res) {
    let cityId = req.params.cityId;
    let updated = req.body;

    citiesModel.findByIdAndUpdate(cityId, updated, (err, cityUpdate) => {
        res.status(200).send({
            mensaje: 'su producto a sido actualizado',
            citiesModel: cityUpdate
        });
    });
}

module.exports = {
    getApiCities,
    getFindOneApiCities,
    putApiCities,
    postApiCities,
    deleteApiCities
};
