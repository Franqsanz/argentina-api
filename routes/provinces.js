'use strict';

/* eslint-disable prettier/prettier */
const router = require('express').Router();
const routesCities = require('../controllers/routesCtrl');
const validator = require('../validators/validator');

router.get('/provinces', routesCities.getCities);
router.get('/provinces/:cityId', routesCities.getFindOneCities);
router.post('/provinces', validator, routesCities.postCities);
router.put('/provinces/:cityId', routesCities.putCities);
router.delete('/provinces/:cityId', routesCities.deleteCities);

module.exports = router