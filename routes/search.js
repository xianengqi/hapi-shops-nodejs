const GROUP_NAME = 'search';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{openId}/indexaction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '关键词和搜索历史接口'
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{keyword}/helperaction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '搜索提示接口',
    },
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{oldData}/addhistoryaction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '搜索的关键词添加到数据库'
    },
  },
  {
    method: 'DELETE',
    path: `/${GROUP_NAME}/{openId}/clearhistoryAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '清空搜索历史'
    },
  }
];