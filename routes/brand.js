const controllers = require('../db/index');
const middleware = require('../middleware');
const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');
const GROUP_NAME = 'brand'

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}/listAction`,
    handler: async (request, reply) => {
      let res = await controllers.brand.listAction(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '首页品牌制造商直供的详情内的列表数据',
      validate: {
        query: {
          ...paginationDefine,
        }
      }
    }
  },
  // 首页品牌制造商直供的详情数据
  {
    method: 'GET',
    path: `/${GROUP_NAME}/detailaction`,
    handler: async (request, reply) => {
      let res = await controllers.brand.detailAction(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '首页品牌制造商直供的详情数据',
      validate: {
        query: {
          ...paginationDefine,
          id: Joi.number().description('品牌商ID')
        },
      },
    },
  },
]