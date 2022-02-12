const router = require('express').Router();
const handlerProfile = require('../api/users/profile');

router.get('/profile', handlerProfile);

module.exports = router;