const router = require('express').Router();

router.get('/dashboard', (req, res) => {
    res.json('ac dashboard');
});

router.get('/scan', (req, res) => {
    res.json('ac scan');
});

module.exports = router;