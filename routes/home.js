// const homeBanner = require('../db/home');
const controllers = require('../db/index');
const code = require('../lib/code');
const middleware = require('../middleware');
const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');

const GROUP_NAME = 'home';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      let res = await controllers.home(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '获取首页数据',
      validate: {
        query: {
          ...paginationDefine,
          // newCategoryList: Joi.number().required().description('在商品中找到 在childCategoryIds里的七条数据ID')
        }
      }
    },
   
  },
]