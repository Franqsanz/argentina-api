/* eslint-disable prettier/prettier */
const router = require('express').Router();
const routesCities = require('../controllers/routesCtrl')

router.get('/cities', routesCities.getApiCities);
router.get('/cities/:cityId', routesCities.getFindOneApiCities);
router.post('/cities', routesCities.postApiCities);
router.put('/cities/:cityId', routesCities.putApiCities);
router.delete('/cities/:cityId', routesCities.deleteApiCities);

module.exports = router