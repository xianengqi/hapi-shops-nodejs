const GROUP_NAME = 'order';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{isOrder}/submitAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '提交订单',
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{addressId}/detailAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '提交订单的详细数据'
    },
  },
];