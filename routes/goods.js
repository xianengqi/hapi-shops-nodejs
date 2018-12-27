const controllers = require('../db/index');
const middleware = require('../middleware');
const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');
const GROUP_NAME = 'goods';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}/detailaction`,
    handler: async (request, reply) => {
      let res = await controllers.goods.detailAction(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取商品详情接口',
      validate: {
        query: {
          ...paginationDefine,
          goodsId: Joi.number().description('商品ID'),
          goodsIdImg: Joi.number().description('商品相关图片ID'),
          goodsIdAttr: Joi.number().description('相关属性ID'),
          brandId: Joi.number().description('商品品牌ID'),
          comment: Joi.number().description('热门评论条数ID'),
          productLists: Joi.number().description('大家都在看 ID'),
          openIdUser: Joi.string().description('用户 ID'),
          goodsIdValue: Joi.number().description('value'),
          openIdUserName: Joi.string().description('购物车用户openID'),
        }
      }
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/goodsList`,
    handler: async (request, reply) => {
      let res = await controllers.goods.goodsList(request);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取商品列表',
      validate: {
        query: {
          ...paginationDefine,
          categoryId: Joi.number().description('获得商品类别Id'),
          isNew: Joi.boolean().description('是否有新品列表'),
          order: Joi.number().description('订单ID'),
          isHot: Joi.boolean().description('最热商品'),
        }
      }
    }
  }
]