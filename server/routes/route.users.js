const router = require('express').Router();

router.get('/user', (req, res) => {
    res.json('user');
});

router.get('/users', (req, res) => {
    res.json('users');
});

module.exports = router;