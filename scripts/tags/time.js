'use strict';

hexo.extend.tag.register('time', function(args) {
  args = args.join(' ');
  let ret = '';
  ret += '<div class="time">'
  ret += '<span>' + args + '</span>';
  ret += '</div>'
  return ret;
});
