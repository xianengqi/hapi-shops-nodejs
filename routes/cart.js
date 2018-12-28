const controllers = require('../db/index');
const middleware = require('../middleware');
const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');
const GROUP_NAME = 'cart';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/addCart`,
    handler: async (request, reply) => {
      // let parms = request.payload;
      let res = await controllers.cart.addCart(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '添加购物车',
      validate: {
        // ...jwtHeaderDefine,
        payload: Joi.object().keys({
          // number: Joi.number().required(),
          goodsId: Joi.number(),
          openId: Joi.string(),
          // number: Joi.number(),
          // name: Joi.string(),
          // list_pic_url: Joi.string(),
          // retail_price: Joi.string(),
        })
      },
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/cartList`,
    handler: async (request, reply) => {
      let res = await controllers.cart.cartList(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '购物车列表',
      validate: {
        query: {
          ...paginationDefine,
          openId: Joi.string().required()
        }
      },
    },
  },
  {
    method: 'DELETE',
    path: `/${GROUP_NAME}/deleteAction`,
    handler: async (request, reply) => {
      let parms = request.payload;
      let res = await controllers.cart.deleteAction(parms);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '删除商品',
      validate: {
        // ...jwtHeaderDefine,
        payload: Joi.object().keys({
          id: Joi.number().required()
        })
      },
    },
  },
];