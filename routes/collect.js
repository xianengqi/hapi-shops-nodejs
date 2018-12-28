const controllers = require('../db/index');
const middleware = require('../middleware');
const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');
const GROUP_NAME = 'collect';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/addcollect`,
    handler: async (request, reply) => {
      let parms = request.payload;
      let res = await controllers.collect.addCollect(parms);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '添加收藏',
      validate: {
        // ...jwtHeaderDefine,
        payload: Joi.object().keys({
          goodsId: Joi.number(),
          openId: Joi.string(),
        })
      },
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/listAction`,
    handler: async (request, reply) => {
      let res = await controllers.collect.listAction(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '获取收藏列表',
      validate: {
        query: {
          ...paginationDefine,
          openId: Joi.string().description('拿到用户的openID'),
          goodsIds: Joi.number().required().description('拿到用户的openID'),
          // is_default: Joi.boolean().default(true).description('默认关键字')
        }
      },
    },
  },
  {
    method: 'DELETE',
    path: `/${GROUP_NAME}/deleteCollect`,
    handler: async (request, reply) => {
      let parms = request.payload;
      let res = await controllers.collect.deleteCollect(parms);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '删除收藏列表',
      validate: {
        // ...jwtHeaderDefine,
        payload: Joi.object().keys({
          id: Joi.number().required()
        })
      },
    },
  },
];