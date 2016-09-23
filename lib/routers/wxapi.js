var router = require('express').Router();
var xml = require('xml');
var xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
  .get(function(req, res, next) {
    res.send('hello world');
  })

module.exports = router;
