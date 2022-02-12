const router = require('express').Router();
const routeDevicesAC = require('./ac');
const routeDevicesLights = require('./lights');

router.use('/ac', routeDevicesAC);
router.use('/lights', routeDevicesLights);

module.exports = router;