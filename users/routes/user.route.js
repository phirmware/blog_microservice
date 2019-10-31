const router = require('express').Router();

router.route('/').get((req, res) => {
    res.json({ message: 'Here' });
});

module.exports = router;
