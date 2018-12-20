const Hapi = require('hapi');
require('env2')('./.env');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');
const routesHome = require('./routes/home');

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
  server.route([
    // 创建一个简单的 hello hapi 接口
    ...routesHelloHapi,
    ...routesHome,
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init();