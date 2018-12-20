const GROUP_NAME = 'feedback';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{data}/submitAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '意见反馈'
    },
  },
];