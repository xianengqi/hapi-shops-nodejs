const controllers = require('../db/index');
const middleware = require('../middleware');
const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');
const GROUP_NAME = 'order';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/submitAction`,
    handler: async (request, reply) => {
      let parms = request.payload;
      let res = await controllers.order.submitAction(parms);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '提交订单',
      validate: {
        // ...jwtHeaderDefine,
        payload: Joi.object().keys({
          goodsId: Joi.string(),
          openId: Joi.string(),
          allPrise: Joi.string(),
        })
      },
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/detailAction`,
    handler: async (request, reply) => {
      let res = await controllers.order.detailAction(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '提交订单的详细数据',
      validate: {
        query: {
          ...paginationDefine,
          openId: Joi.string(),
          openIder: Joi.string(),
          openIdUser: Joi.string().required(),
          addressIdUser: Joi.string().required(),
        }
      },
    },
  },
];