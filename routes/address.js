const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');
const models = require('../models');
const GROUP_NAME = 'address';

module.exports = [
  {
    method: 'PUT',
    path: `/${GROUP_NAME}/{addressId}/saveAction`,
    handler: async (request, reply) => {
      // 增加带有where 的条件查询语句
      const {
        rows: results,
        count: totalCount
      } = await models.nideshop_address.findAndCountAll({
        where: {
          user_id: request.params.addressId,
          is_default: 1
        },
        // attributes: 
      })
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '保存和更新收货地址',
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