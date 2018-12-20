const GROUP_NAME = 'goods';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{goodsId}/detailaction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取商品详情接口'
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{categoryId}/goodsList`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取商品列表'
    }
  }
]