const router = require('express').Router();
const handlerDashboard = require('../../api/devices/lights/dashboard');
const handlerScan = require('../../api/devices/lights/scan');

router.get('/dashboard', handlerDashboard);
router.get('/scan', handlerScan);

module.exports = router;