'use strict';

/* eslint-disable prettier/prettier */
const router = require('express').Router();
const routesProv = require('../controllers/routesCtrl');
const validator = require('../validators/validator');

router.get('/provinces', routesProv.getProvincesAll);
router.get('/provinces/:provinceId', routesProv.getFindOneProvinces);
router.post('/provinces', validator, routesProv.postProvinces);
router.put('/provinces/:provinceId', routesProv.putProvinces);
router.delete('/provinces/:provinceId', routesProv.deleteProvinces);

module.exports = router