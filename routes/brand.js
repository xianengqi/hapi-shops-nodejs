const Joi = require('joi');
const { paginationDefine } = require('../utils/router-helper');
const models = require('../models');
const GROUP_NAME = 'brand'

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {

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