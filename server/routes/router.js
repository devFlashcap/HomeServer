const router = require('express').Router();
const routeUsers = require('./users');
const routeDevices = require('./devices');

router.use('/users', routeUsers);
router.use('/devices', routeDevices);

module.exports = router;