const router = require('express').Router();
const routeUsers = require('./route.users');
const routeDevices = require('./devices');

router.use('/users', routeUsers);
router.use('/devices', routeDevices);

module.exports = router;