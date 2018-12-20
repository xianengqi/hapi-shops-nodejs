const GROUP_NAME = 'topic';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}/listaction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取专题列表'
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{id}/detailaction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取详情加下方四个专题推荐'
    }
  }
]