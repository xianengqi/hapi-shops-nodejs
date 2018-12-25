const Joi = require('joi');
const { paginationDefine } = require('../utils/router-helper');
const models = require('../models');
const GROUP_NAME = 'home';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      // 轮播数据
      // 开启分页的插件，返回的数据结构里， 需要带上result与totalCount两个字段
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取首页轮播图数据',
      validate: {
        query: {
          ...paginationDefine,
        }
      }
    },
  },
  // 类型
  {
    method: 'GET',
    path: `/${GROUP_NAME}/channel`,
    handler: async (request, reply) => {
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取商品类型',
      validate: {
        query: {
          ...paginationDefine,
        }
      }
    },
  },
  // 商品详情
  {
    method: 'GET',
    path: `/${GROUP_NAME}/newGoods`,
    handler: async (request, reply) => {
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取商品详情',
      validate: {
        query: {
          ...paginationDefine,
        },
      },
    },
  },
  // // 热门商品
  {
    method: 'GET',
    path: `/${GROUP_NAME}/hotGoods`,
    handler: async (request, reply) => {
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '热门商品',
      validate: {
        query: {
          ...paginationDefine,
        },
      },
    },
  },
  // 品牌列表
  {
    method: 'GET',
    path: `/${GROUP_NAME}/brandList`,
    handler: async (request, reply) => {
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '热门商品品牌列表',
      validate: {
        query: {
          ...paginationDefine,
        },
      },
    },
  },
  // 主题列表
  {
    method: 'GET',
    path: `/${GROUP_NAME}/topicList`,
    handler: async (request, reply) => {
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '主题列表',
      validate: {
        query: {
          ...paginationDefine,
        },
      },
    },
  },
  // 类别列表
  {
    method: 'GET',
    path: `/${GROUP_NAME}/categoryList`,
    handler: async (request, reply) => {
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '类别列表',
      validate: {
        query: {
          ...paginationDefine,
        },
      },
    },
  },
  // 查询主类别对应的子类别
  {
    method: 'GET',
    path: `/${GROUP_NAME}/childCategoryIds`,
    handler: async (request, reply) => {
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '查询主类别对应的子类别',
      validate: {
        query: {
          ...paginationDefine,
        },
      },
    },
  },
  // 在商品中找到 在childCategoryIds里的七条数据
  {
    method: 'GET',
    path: `/${GROUP_NAME}/categoryGoods`,
    handler: async (request, reply) => {
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '在商品中找到 在childCategoryIds里的七条数据',
      validate: {
        query: {
          ...paginationDefine,
        },
      },
    }
  }
]