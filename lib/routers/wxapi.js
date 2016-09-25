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
  }), function(req, res, next) {
    var content = undefined;
    var data = req.body.xml;
    var type = data.msgtype;

    // var content = JSON.stringify(data);

    if (type === 'voice') {
      content = data.recognition;
    } else {
      content = data.content;
      switch (content) {
        case '1':
          content = '一一得一';
          break;
        case '2':
          content = '二二得四';
          break;
        case '3':
          content = '三三得九';
          break;
        case '4':
          content = '四四十六';
          break;
        case '5':
          content = '五五二十五';
          break;
        case '6':
          content = '六六三十六';
          break;
        case '7':
          content = '七七四十九';
          break;
        case '8':
          content = '八八六十四';
          break;
        case '9':
          content = '九九去你大爷';
          break;
        default:
          content = '回复 1 ~ 9 数字，学会乘法口诀。';
      }
    }

    res.append('Content-Type', 'text/xml');
    res.send(xml({
      xml: [
        {ToUserName: {_cdata: data.fromusername}},
        {FromUserName: {_cdata: data.tousername}},
        {CreateTime: +new Date()},
        {MsgType: {_cdata: 'text'}},
        {Content: {_cdata: content}},
      ]
    }));
  })

module.exports = router;
