const express = require('express');
const router = express.Router();
const request =  require('request-promise');

const bConfig = require('../configs/bConfig');
const myKey = bConfig.myConfig.MYAPIKEY;

/* GET home page. */
router.get('/', function(req, res, next) {
    const options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?id=4930956',
    qs:
        { key: 'myKey'},
    headers: {
        'cache-control': 'no-cache'
             }
    };
    request(options, function (error, response, body) {
        if (error)
            throw new Error(error);
        console.log(body);
        res.render('result',JSON.parse(body));
    });
});

router.post('/result', function (req,res,next) {});
module.exports = router;



