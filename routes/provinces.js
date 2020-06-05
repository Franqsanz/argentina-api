'use strict';
/* eslint-disable prettier/prettier */

const router = require('express').Router();
const handleQuery = require('../controllers/handleQuery');
const {
    getHome,
    getProvincesAll,
    getFindOneProvinces
} = require('../controllers/routesCtrl');

router.get('/', getHome)
router.get('/provinces', handleQuery, getProvincesAll);
router.get('/provinces/:provinceId', getFindOneProvinces);

module.exports = router