const Joi = require('joi');
const { paginationDefine } = require('../utils/router-helper');
const models = require('../models');
const GROUP_NAME = 'category';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      
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
  
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '点击右侧分类时获取左侧对应的分类',
      validate: {
        query: {
          ...paginationDefine,
        }
      },
    },
  },

];