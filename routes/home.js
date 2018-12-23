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
      const { rows: banner, count: totalCount} = await models.nideshop_ad.findAndCountAll({
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
      reply({
        banner,
        totalCount
      });
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取首页数据',
      validate: {
        query: {
          ...paginationDefine,
        }
      }
    },
  },
]