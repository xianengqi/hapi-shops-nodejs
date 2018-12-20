
const GROUP_NAME = 'category';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{categoryId}/indexaction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '分类和子类'
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{categoryId}/currentaction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '通过分类的id来查询子类接口'
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{categoryId}/categoryNav`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取导航数据',
    },
  },
];