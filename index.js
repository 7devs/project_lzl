var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var wechat = require('./lib/wechat');
var config = require('./lib/config');

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.set('views', path.join(__dirname, 'lib/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'static'), {
  index: false,
  maxAge: '7 days'
}));

wechat(config.wechat);

wechat.createMenu(require('./lib/menu.json'));

app.use('/wxapi', require('./lib/routers/wxapi.js'));
app.use('/pages', require('./lib/routers/pages.js'));

app.get('/', function(req, res, next) {
  res.send('lizunlong');
});

app.listen(8007, function(error) {
  console.log('listenning at 8007...');
});
