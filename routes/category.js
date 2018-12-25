const Joi = require('joi');
const { paginationDefine } = require('../utils/router-helper');
const models = require('../models');
const GROUP_NAME = 'category';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      const { id: categoryId } = request.query;
      // 获取所有的分类
      const data = await models.nideshop_category.findAndCountAll({
        where: {
          parent_id: 0,
        },
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      const currentCategory = [];
      if (categoryId) {
        // 获取分类里的子类
        currentCategory = await models.nideshop_category.findAndCountAll({
          where: {
            parent_id: categoryId,
          }
        });
      };
      reply([
       { categoryList: data }
      ])
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取所有的分类',
      validate: {
        query: {
          ...paginationDefine,
        }
      },
    },
  },
  // 点击右侧分类时获取左侧分类
  {
    method: 'GET',
    path: `/${GROUP_NAME}/currentAction`,
    handler: async (request, reply) => {
      // 获取分类里的子类
      const {
        id: categoryId
      } = request.query;
      const data = {};
      const currentOne = await models.nideshop_category.findAndCountAll({
        where: {
          'id': categoryId,
        },
      });
      const subList = await models.nideshop_category.findAndCountAll({
        where: {
          'parent_id': currentOne[0].id,
        },
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      data.currentOne = currentOne[0];
      data.currentOne.subList = subList;
      reply({data: data})
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '点击右侧分类时获取左侧对应的分类',
      validate: {
        // params: {
        //   categoryId: Joi.string().required().description('获取左侧对应的分类ID'),
        // },
        query: {
          ...paginationDefine,
        }
      },
    },
  },
  // {
  //   method: 'GET',
    
  // }
];