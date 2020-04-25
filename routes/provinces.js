'use strict';
/* eslint-disable prettier/prettier */

const router = require('express').Router();
const routesProv = require('../controllers/routesCtrl');

router.get('/provinces', routesProv.getProvincesAll);
router.get('/provinces/:provinceId', routesProv.getFindOneProvinces);

module.exports = router