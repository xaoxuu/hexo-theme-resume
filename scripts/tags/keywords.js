'use strict';

hexo.extend.tag.register('keywords', function(args) {
  args = args.join(' ').split(', ');
  let ret = '';
  args.forEach((item, i) => {
    ret += '<span class="keyword">' + item + '</span>';
  });
  return ret;
});
