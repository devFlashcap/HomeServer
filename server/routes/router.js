var router = require('express').Router();
var routeUser = require('./route.user');

router.use('/user', routeUser);

module.exports = router;