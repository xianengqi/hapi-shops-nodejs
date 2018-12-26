// const path = require('path');
// const fs = require('fs');

// const routes = {}

// fs.readdirSync(__dirname).forEach(function (file) {
//   // 如果是当前文件则忽略
//   if (file === 'index.js') return;
//   routes[path.basename(file, '.js')] = require(path.join(__dirname, file));
// });

// module.exports = routes
const helloHapi = require('./helloHapi');
const address = require('./address');
const brand = require('./brand');
const cart = require('./cart');
const category = require('./category');
const collect = require('./collect');
const feedback = require('./feedback');
const goods = require('./goods');
const home = require('./home');
const order = require('./order');
const search = require('./search');
const topic = require('./topic');

module.exports = [
  ...helloHapi,
  ...address,
  ...brand,
  ...cart,
  ...category,
  ...collect,
  ...feedback,
  ...goods,
  ...home,
  ...order,
  ...search,
  ...topic,
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'frontend',
        index: ['index.html', 'default.html']
      }
    },
    config: {
      auth: false,
    },
  },
];