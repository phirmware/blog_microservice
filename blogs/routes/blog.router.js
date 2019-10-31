const router = require('express').Router();

router.route('/').get((req, res) => {
    res.json({message: 'blogs here!'});
});

module.exports = router;
