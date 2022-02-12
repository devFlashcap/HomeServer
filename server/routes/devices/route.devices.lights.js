const router = require('express').Router();

router.get('/dashboard', (req, res) => {
    res.json('lights dashboard');
});

router.get('/scan', (req, res) => {
    res.json('lights scan');
});

module.exports = router;