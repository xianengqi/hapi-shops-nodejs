const GROUP_NAME = 'collect';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{iscollect}/addcollect`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '添加收藏',
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{listData}/listAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取收藏列表',
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{data}/deleteCollect`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取收藏列表',
    },
  },
];