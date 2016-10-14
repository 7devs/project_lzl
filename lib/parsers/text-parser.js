var albums = require('../models/albums');

function makeTitleList(albums) {
  var list = ''
  albums.map(function(album, index) {
    var line = (index + 1).toString() + '- ' + album.title + '\n';
    list += line;
  });
  list = list.substring(0, list.length - 1);
  return list;
}

function getAlbumInfo(num) {
  var index = num - 1;
  if (albums[index]) {
    var album = albums[index];
    return '标题：' + album.title + '\n风格：' + album.type + '\n时长：' + album.length + '秒\n演唱者：' + album.singer;
  } else {
    return '曲库中没有第' + num.toString() + '张专辑';
  }
}

module.exports = function(content) {
  if (content.trim() === '唱片列表') {
    return makeTitleList(albums);
  }

  if (content[0] === 'a') {
    var otherStr = content.substr(1);
    var num = parseInt(otherStr);
    if (!isNaN(num) && typeof num === 'number' && otherStr !== '') {
      return getAlbumInfo(num);
    } else {
      return '回复 [aX] 中的 X 必须是数字。';
    }
  }

  return '回复 [唱片列表] 获取全部唱片数据，或者回复 [aX] 获取第 X 张专辑的详细内容。';
}
