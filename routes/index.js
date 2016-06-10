require('dotenv').config();
var express = require('express');
var router = express.Router();
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: '',
  consumer_secret: '',
  token: '',
  token_secret: '',
});

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/search/:location', function(req, res){
  var location = req.params.location;
  yelp.search({ term: 'food', location: location })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      console.error(err);
    });
});

module.exports = router;
