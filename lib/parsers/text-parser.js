module.exports = function(content) {
  var reContent;
  switch (content) {
    case '1':
      reContent = '一一得一';
      break;
    case '2':
      reContent = '二二得四';
      break;
    case '3':
      reContent = '三三得九';
      break;
    case '4':
      reContent = '四四十六';
      break;
    case '5':
      reContent = '五五二十五';
      break;
    case '6':
      reContent = '六六三十六';
      break;
    case '7':
      reContent = '七七四十九';
      break;
    case '8':
      reContent = '八八六十四';
      break;
    case '9':
      reContent = '九九去你大爷';
      break;
    default:
      reContent = '回复 1 ~ 9 数字，学会乘法口诀。';
      break;
  }
  return reContent;
}
