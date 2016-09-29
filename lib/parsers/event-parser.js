var conf = require('../config');
var wechat = require('../wechat');
module.exports = function(data) {
  var reContent;
  var event = data.event.toLowerCase();
  var eventkey = data.eventkey;
  var url = 'https://lizunlong.com/';
  switch (event) {
    case 'click':
      switch (eventkey) {
        case 'menu1':
          reContent = 'Here is menu 1.';
          break;
        case 'menu2':
          reContent = 'There is Menu 2.';
          wechat.sendByTemplate(data.fromusername, conf.wechat.template.test, {
            test: {
              value: '测试',
              color: '#ff0000',
            },
            demo: {
              value: '演示',
              color: '#173177',
            },
          }, url);
          break;
        case 'default':
          reContent = 'There are menu 1 and 2.';
          break;
      }
      break;
    default:
      reContent = event;
      break;
  }
  return reContent;
}
