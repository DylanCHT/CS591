const express = require('express');
const router = express.Router();
const request = require('request');
const db = require('../mongoDB/mongoDB');


const bConfig = require('../../PS8.1/configs/bConfig');
const myKey = bConfig.myConfig.MYAPIKEY;


db.connect((err, client) => {
  if (err) {
    console.log(`ERR: ${err}`);
  } else {
    console.log(`Connected`);
  }
});


router.get('/:city', function(req, res, next) {
  let mongo = db.getDB();
  mongo.collection('cities').find({city: req.params.city}).
  toArray(function(err, docs) {
    console.log(docs)
    if (docs.length !== 0) {
      res.send(docs[0]);
    } else {
      getData(req.params.city)
          .then(function (body) {
            const city = req.params.city;
            const temp = JSON.parse(body).main.temp;
            console.log(temp);
            let mongo = db.getDB();
            mongo.collection('cities').insertOne({temp: temp, city: city, cached:"Cached Response"})
            res.send({temp: temp, city: city, cached:"Not a Cached response"});
          })
          .catch(function (err) {
            console.log(`ERROR! ${err}`);

          });

      console.log(`Wait`);
    }
  });
});


const getData = function (rqcity) {
  return new Promise(function (resolve, reject) {
    let city = rqcity;
    console.log(myKey);
    const options = {
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    }
    request(options, function (error, response, body) {
      if (error)
        reject(new Error(error));
      else {
        resolve(body);
      }
    })
  })
}
