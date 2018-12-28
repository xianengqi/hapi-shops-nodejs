const Hapi = require('hapi');
require('env2')('./.env');
const hapiAuthJWT2 = require('hapi-auth-jwt2');
const config = require('./config');
const routes = require('./routes');
const log = require('./log');
// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPageination = require('./plugins/hapi-pagination');
// const pluginHapiPagination = require('./plugins/hapi-pagination');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');


const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
  routes: {
    cors: true
  }
});

const insert = require('inert');

const init = async () => {
  // 注册插件
  await server.register(hapiAuthJWT2);
  await server.register([
    ...pluginHapiSwagger,
    pluginHapiPageination.pageOptions,
    log.logOptions,
    insert,
  ]);
  pluginHapiAuthJWT2(server);
  // 路由开始注册
  // Object.values(routes).map(route => {
  //   route.forEach(api => {
  //     server.route(api);
  //   });
  // })

  // 路由注册
  server.route([
    ...routes,
  ]);
  // 启动服务
  await server.start();
  console.log(`服务启动: ${server.info.uri}`);
}

init();