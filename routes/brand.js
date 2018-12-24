const Joi = require('joi');
const { paginationDefine } = require('../utils/router-helper');
const models = require('../models');
const GROUP_NAME = 'brand'

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      const { rows: results, count: totalCount } = await models.nideshop_brand.findAndCountAll({
        attributes: [
          'id', 'name', 'floor_price', 'app_list_pic_url'
        ],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      })
      reply({
        results,
        totalCount
      });
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '首页品牌制造商直供的详情内的列表数据',
      validate: {
        query: {
          ...paginationDefine,
        }
      }
    }
  },
  // 商家ID
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopGoodId}/detail`,
    handler: async (request, reply) => {
      const {
        rows: results,
        count: totalCount
      } = await models.nideshop_brand.findAndCountAll({
        where: {
          id: request.params.shopGoodId,
        },
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      })
      reply({
        results,
        totalCount,
      });
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '商家ID',
      validate: {
        params: {
          shopGoodId: Joi.string().required().description('首页品牌制造商直供的详情数据'),
        },
        query: {
          ...paginationDefine,
        },
      },
    },
  },
  // 商品品牌详情
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{brandId}/goodsList`,
    handler: async (request, reply) => {
      const {
        rows: results,
        count: totalCount
      } = await models.nideshop_goods.findAndCountAll({
        where: {
          brand_id: request.params.brandId,
        },
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      reply({
        results,
        totalCount,
      });
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '商品品牌ID',
      validate: {
        params: {
          brandId: Joi.string().required().description('商品品牌ID'),
        },
        query: {
          ...paginationDefine,
        },
      }
    }
  }
]