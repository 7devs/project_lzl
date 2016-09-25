var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/wxapi', require('./lib/routers/wxapi.js'));

app.get('/', function(req, res, next) {
  res.send('1474817599487');
});

app.listen(8007, function(error) {
  console.log('listenning at 8007...');
});
