'use strict';
/* eslint-disable prettier/prettier */

const router = require('express').Router();
const {
    getHome,
    getProvincesAll,
    getFindOneProvinces
} = require('../controllers/routesCtrl');

router.get('/', getHome)
router.get('/provinces', getProvincesAll);
router.get('/provinces/:provinceId', getFindOneProvinces);

module.exports = router