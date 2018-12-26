const controllers = require('../db/index');
const middleware = require('../middleware');
const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');
const GROUP_NAME = 'category';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}/indexAction`,
    handler: async (request, reply) => {
      let res = await controllers.category.indexAction(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取所有的分类',
      validate: {
        query: {
          ...paginationDefine,
          categoryId: Joi.number().description('获取分类里的子类ID')
        }
      },
    },
  },
  // 通过分类的id来查询子类接口
  {
    method: 'GET',
    path: `/${GROUP_NAME}/currentAction`,
    handler: async (request, reply) => {
      let res = await controllers.category.currentAction(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '通过分类的id来查询子类接口',
      validate: {
        // params: {
        //   categoryId: Joi.number().required().description('获取分类里的子类ID'),
        // },
        query: {
          ...paginationDefine,
          id: Joi.number().description('点击右侧分类时获取左侧分类ID'),
            parent_id: Joi.number().description('获得它的同类ID'),
        }
      },
    },
  },
  // 获取导航数据
  {
    method: 'GET',
    path: `/${GROUP_NAME}/categoryNav`,
    handler: async (request, reply) => {
      let res = await controllers.category.categoryNav(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取导航数据',
      validate: {
        // params: {
        //   categoryGoodId: Joi.number().required().description('获取导航数据'),
        // },
        query: {
          ...paginationDefine,
          id: Joi.number().description('获得当前分类ID'),
          parent_id: Joi.number().description('获得它的同类ID'),
        }
      },
    }
  }
];