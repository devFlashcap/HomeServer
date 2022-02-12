const router = require('express').Router();
const routeDevicesAC = require('./route.devices.ac');
const routeDevicesLights = require('./route.devices.lights');

router.use('/ac', routeDevicesAC);
router.use('/lights', routeDevicesLights);

module.exports = router;