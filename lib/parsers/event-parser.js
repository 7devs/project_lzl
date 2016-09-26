module.exports = function(event, eventkey) {
  var reContent;
  switch (event.toLowerCase()) {
    case 'click':
      switch (eventkey) {
        case 'menu1':
          reContent = 'Here is menu 1.';
          break;
        case 'menu2':
          reContent = 'There is Menu 2.';
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
