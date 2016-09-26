module.exports = function(data) {
  var reContent;
  var msgtype = data.msgtype;

  switch(msgtype) {
    case 'text':
      reContent = require('./text-parser.js')(data.content);
      break;
    case 'voice':
      reContent = require('./voice-parser.js')(data.recognition);
      break;
    // case 'video':
    //   return require('./video-parser.js')(data);
    // break;
    // case 'location':
    //   return require('./location-parser.js')(data);
    // break;
    // case 'shortvideo':
    //   return require('./shortvideo-parser.js')(data);
    // break;
    default:
      reContent = '你懂什么~';
      break;
  }

  return reContent;
}
