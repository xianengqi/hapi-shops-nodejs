const inert = require('inert');
const vision = require('vision');
const package = require('package');
const hapiSwagger = require('hapi-swagger');

module.exports = [
  inert,
  vision,
  {
    register: hapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: package.version,
      },
      // 定义接口以 tags 属性定义为分组
      grouping: 'tags',
      tags: [
        { name: 'tests', description: '测试相关' },
        { name: 'home', description: '首页数据' },
        { name: 'brand', description: '首页品牌制造商直供相关数据' },
        { name: 'category', description: '分类相关接口' },
        { name: 'goods', description: '商品相关接口' },
        { name: 'topic', description: '专题列表相关接口' },
        { name: 'search', description: '搜索相关接口' },
        { name: 'collect', description: '收藏相关接口' },
        { name: 'cart', description: '购物车相关接口' },
        { name: 'order', description: '订单相关接口' },
        { name: 'address', description: '收获地址相关接口' },
        { name: 'feedback', description: '意见反馈相关接口' },
        { name: 'users', description: '小程序登录授权接口' },
      ],
    },
  },
];