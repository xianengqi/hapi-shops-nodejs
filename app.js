const Hapi = require('hapi');
require('env2')('./.env');
const config = require('./config');
const routes = require('./routes');

// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPageination = require('./plugins/hapi-pagination');

const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
  routes: {
    cors: true
  }
});

// 路由设置
// server.route({
//   path: '/',
//   method: 'GET',
//   hadnler: (request, reply) => {
//     reply('欢迎来到')
//   }
// })

const init = async () => {
  // 注册插件
  await server.register([
    ...pluginHapiSwagger,
    pluginHapiPageination,
  ]);
  // 路由开始注册
  Object.values(routes).map(route => {
    route.forEach(api => {
      server.route(api);
    });
  })
  // 启动服务
  await server.start();
  console.log(`服务启动: ${server.info.uri}`);
}

init();