var router = require('express').Router();
var xml = require('xml');
var xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
  .get(function(req, res, next) {
    var str = req.query.echostr;
    res.send(str);
  })
  .post(xmlBodyParser({
    explicitArray: false,
  }), function(req, res, nextt) {
    var data = req.body.xml;
    var content = data.content;
    // TODO: xxxx
    res.append('Content-Type', 'text/xml');
    res.send(xml({
      xml: [
        {ToUserName: {_cdata: data.fromusername}},
        {FromUserName: {_cdata: data.tousername}},
        {CreateTime: +new Date()},
        {MsgType: {_cdata: 'text'}},
        {Content: {_cdata: '好您嘞~'}},
      ]
    }));
  })

module.exports = router;
