const path = require('path');
const fs = require('fs');

const handlers = {}

fs.readdirSync(__dirname).forEach(function (file) {
  // 如果是当前文件则忽略
  if (file === 'index.js') return;
  handlers[path.basename(file, '.js')] = require(path.join(__dirname, file));
});

module.exports = handlers