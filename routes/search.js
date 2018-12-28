const controllers = require('../db/index');
const middleware = require('../middleware');
const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');
const GROUP_NAME = 'search';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}/indexaction`,
    handler: async (request, reply) => {
      let res = await controllers.search.indexAction(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '关键词和搜索历史接口',
      validate: {
        query: {
          ...paginationDefine,
          openId: Joi.string().description('拿到用户的openID'),
          // is_default: Joi.boolean().default(true).description('默认关键字')
        }
      },
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/helperaction`,
    handler: async (request, reply) => {
      let res = await controllers.search.helperAction(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '搜索提示接口',
      validate: {
        query: {
          ...paginationDefine,
          keyword: Joi.string().description('搜索相关的关键字'),
          // order: Joi.number().description('订单ID')
        }
      },
    },
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/addhistoryaction`,
    handler: async (request, reply) => {
      let { openId, keyword } = request.payload;
      let res = await controllers.search.addHistoryAction(openId, keyword);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '搜索的关键词添加到数据库',
      validate: {
        // ...jwtHeaderDefine,
        payload: Joi.object().keys({
          openId: Joi.number(),
          keyword: Joi.string(),
        })
      },
    },
  },
  {
    method: 'DELETE',
    path: `/${GROUP_NAME}/clearhistoryAction`,
    handler: async (request, reply) => {
      let parms = request.payload;
      let res = await controllers.search.clearhistoryAction(parms);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '清空搜索历史',
      validate: {
        // ...jwtHeaderDefine,
        payload: Joi.object().keys({
          id: Joi.string().required()
        })
      },
    },
  }
];