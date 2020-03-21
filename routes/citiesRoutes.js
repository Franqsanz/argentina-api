'use strict';

/* eslint-disable prettier/prettier */
const router = require('express').Router();
const routesCities = require('../controllers/routesCtrl')

router.get('/cities', routesCities.getCities);
router.get('/cities/:cityId', routesCities.getFindOneCities);
router.post('/cities', routesCities.postCities);
router.put('/cities/:cityId', routesCities.putCities);
router.delete('/cities/:cityId', routesCities.deleteCities);

module.exports = router