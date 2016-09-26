var app = require('express')();
var bodyParser = require('body-parser');
var wechat = require('./lib/wechat');
var config = require('./lib/config');

app.use(bodyParser.urlencoded({
  extended: false,
}));

wechat(config.wechat);

wechat.createMenu(require('./lib/menu.json'));

app.use('/wxapi', require('./lib/routers/wxapi.js'));

app.get('/', function(req, res, next) {
  res.send('1474902499322');
});

app.listen(8007, function(error) {
  console.log('listenning at 8007...');
});
