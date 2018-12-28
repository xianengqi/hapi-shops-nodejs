const controllers = require('../db/index');
const middleware = require('../middleware');
const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');
const GROUP_NAME = 'address';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/saveAction`,
    handler: async (request, reply) => {
      let parms = request.payload;
      let res = await controllers.address.saveAction(parms);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '保存和更新收货地址',
      validate: {
        // ...jwtHeaderDefine,
        payload: Joi.object().keys({
          // addressId: Joi.number().required(),
          userName: Joi.string().required(),
          telNumber: Joi.string().required(),
          address: Joi.string().required(),
          detailadress: Joi.string().required(),
          openId: Joi.string().required(),
          checked: Joi.boolean().required(),
        })
      },
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{addressList}/getListAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取收货地址列表',
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{detailData}/detailAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取收货地址详情',
    },
  },
  {
    method: 'DELETE',
    path: `/${GROUP_NAME}/{delData}/deleteAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '删除收货地址',
    },
  },
];