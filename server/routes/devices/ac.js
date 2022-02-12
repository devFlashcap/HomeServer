const router = require('express').Router();
const handlerDashboard = require('../../api/devices/ac/dashboard');
const handlerScan = require('../../api/devices/ac/scan');

router.get('/dashboard', handlerDashboard);
router.get('/scan', handlerScan);

module.exports = router;