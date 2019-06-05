const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('result', { string: 'Hey now' });
});

router.post('/', function(req, res, next) {
    const rtn = req.body.string;
    res.render('result', { string: rtn, strlenth: rtn.length});
});

module.exports = router;
