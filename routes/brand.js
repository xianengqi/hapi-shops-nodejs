const GROUP_NAME = 'brand'

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '首页品牌制造商直供的详情内的列表数据',
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{id}/detail`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '首页品牌制造商直供的详情数据'
    }
  }
]