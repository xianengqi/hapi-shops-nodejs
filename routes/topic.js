const controllers = require('../db/index');
const middleware = require('../middleware');
const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');
const GROUP_NAME = 'topic';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}/listaction`,
    handler: async (request, reply) => {
      const res = await controllers.topic.listAction(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '获取专题列表',
      validate: {
        query: {
          ...paginationDefine,
          // categoryId: Joi.number().description('获取分类里的子类ID')
        }
      },
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/detailaction`,
    handler: async (request, reply) => {
      const res = await controllers.topic.detailAction(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '获取详情加下方四个专题推荐',
      validate: {
        query: {
          ...paginationDefine,
          id: Joi.number().required().description('专题ID')
        }
      },
    }
  }
]