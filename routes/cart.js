const GROUP_NAME = 'cart';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{haveGoods}/addCart`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '添加购物车',
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{cartList}/cartList`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '购物车列表',
    },
  },
  {
    method: 'DELETE',
    path: `/${GROUP_NAME}/{data}/deleteAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '删除商品'
    },
  },
];