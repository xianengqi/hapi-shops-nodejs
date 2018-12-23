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
      const { rows: results, count: totalCount} = await models.nideshop_ad.findAndCountAll({
        where: {
          ad_position_id: 1
        },
        attributes: [
          'id',
          'ad_position_id',
          'media_type',
          'name',
          'link',
          'image_url',
          'content',
          'enabled',
          'end_time',
        ],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      })
      // 开启分页的插件，返回的数据结构里， 需要带上result与totalCount两个字段
      reply({ results, totalCount});
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
      // 类型
      const { rows: results, count: totalCount } = await models.nideshop_channel.findAndCountAll({
        attributes: [
          'id', 'name', 'url', 'icon_url', 'sort_order'
        ],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      reply({ results, totalCount});
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
      //这几个id有商品详情
      const {
       rows: results, count: totalCount
      } = await models.nideshop_goods.findAndCountAll({
        where: {
          id: [1181000, 1135002, 1134030, 1134032],
          is_new:  1,
        },
       
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
      const { rows: results, count: totalCount } = await models.nideshop_goods.findAndCountAll({
        where: {
          is_hot: 1,
        },
        attributes: [
          'id', 'name', 'list_pic_url', 'retail_price', 'goods_brief'
        ],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
       });
       reply({
         results,
         totalCount
       });
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
      const { rows: results, count: totalCount } = await models.nideshop_brand.findAndCountAll({
        where: {
          is_new: 1,
        },
        order: [["new_sort_order", 'asc']],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      reply({
        results,
        totalCount
      });
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
      const { rows: results, count: totalCount } = await models.nideshop_topic.findAndCountAll({
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      reply({
        results,
        totalCount
      });
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
      const { rows: results, count: totalCount } = await models.nideshop_category.findAndCountAll({
        where: {
          parent_id: 0
        },
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      reply({
        results,
        totalCount
      });
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
  }
]