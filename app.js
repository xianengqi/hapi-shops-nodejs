const Hapi = require('hapi');
require('env2')('./.env');
const config = require('./config');
// 路由相关配置
const routesHelloHapi = require('./routes/hello-hapi');
const routesHome = require('./routes/home');
const routesBrand = require('./routes/brand');
const routesCategory = require('./routes/category');
const routesGoods = require('./routes/goods');
const routesTopic = require('./routes/topic');
const routesSearch = require('./routes/search');
const routesCollect = require('./routes/collect');
const routesCart = require('./routes/cart');
const routesOrder = require('./routes/order');
const routesAddress = require('./routes/address');
const routesFeedback = require('./routes/feedback');
// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPageination = require('./plugins/hapi-pagination');

const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  // 注册插件
  await server.register([
    ...pluginHapiSwagger,
    pluginHapiPageination,
  ]);
  // 路由相关插件
  server.route([
    ...routesHelloHapi,
    ...routesHome,
    ...routesBrand,
    ...routesCategory,
    ...routesGoods,
    ...routesTopic,
    ...routesSearch,
    ...routesCollect,
    ...routesCart,
    ...routesOrder,
    ...routesAddress,
    ...routesFeedback,
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init();