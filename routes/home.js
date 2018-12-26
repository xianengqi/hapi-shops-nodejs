const homeBanner = require('../db/home');
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
      let res = await homeBanner.bannerHome(request);
      middleware.dbErrorMiddleware(request, res, reply);
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
]