var router = require('express').Router();
var xml = require('xml');
var xmlBodyParser = require('express-xml-bodyparser');
var parser = require('../parsers');

router.route('/')
  .get(function(req, res, next) {
    var str = req.query.echostr;
    res.send(str);
  })
  .post(xmlBodyParser({
    explicitArray: false,
  }), function(req, res, next) {
    var data = req.body.xml;
    var reContent = parser(data);
    res.append('Content-Type', 'text/xml');
    res.send(xml({
      xml: [
        {ToUserName: {_cdata: data.fromusername}},
        {FromUserName: {_cdata: data.tousername}},
        {CreateTime: +new Date()},
        {MsgType: {_cdata: 'text'}},
        {Content: {_cdata: reContent}},
      ]
    }));
  })

module.exports = router;
