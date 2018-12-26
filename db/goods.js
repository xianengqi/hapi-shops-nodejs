// 引入 models
const models = require('../models');
const code = require('../lib/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

detailAction = async (request) => {
  try{
    // 商品信息
    const info = await models.nideshop_goods.findAndCountAll({
      where: {
        id: request.query.goodsId
      },
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    // 商品相关图片
    const gallery = await models.nideshop_goods_gallery.findAndCountAll({
      where: {
        goods_id: request.query.goodsIdImg
      },
      limit: 4,
    });
    /**
     * 相关属性
     * 关联查询两个表 leftJoin
     */
    const attribute = await models.nideshop_goods_attribute.findAndCountAll({
      where: {
        goods_id: request.query.goodsIdAttr
      },
      attributes: [
        'value',
        'goods_id'
      ],
      include: {
        model: models.nideshop_attribute,
        attributes: [
          'name',
        ],
      },
      
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    /**
    * 常见问题
    */
    const issue = await models.nideshop_goods_issue.findAndCountAll({
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    /**
     * 品牌
     */
    brand = await models.nideshop_brand.findAndCountAll({
      where: {
        id: request.query.brandId
      },
    });
    /**
     * 热门评论 评论条数
     */
    const commentCount = await models.nideshop_comment.findAndCountAll({
      where: {
        value_id: request.query.comment,
        type_id: 0
      },
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    /**
    * 大家都在看
    */
    const productList = await models.nideshop_goods.findAndCountAll({
      where: {
        category_id: request.query.productLists
      },
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    /**
    * 判断是否收藏过
    */
    const iscollect = await models.nideshop_collect.findAndCountAll({
      where: {
        "user_id": request.query.openIdUser,
        "value_id": request.query.goodsIdValue
      },
    });
    let collected = false;
    if (iscollect.length > 0) {
       collected = true
    };
    /**
     * 判断该用户是否在购物车有此商品
     */
    const oldNumber = await models.nideshop_cart.findAndCountAll({
      where: {
        user_id: request.query.openIdUserName
      },
      // attributes: [
      //   'number'
      // ],
    })
    return {
      results: {
        info,
        gallery,
        attribute,
        issue,
        brand,
        commentCount,
        productList,
        iscollect,
        oldNumber,
      },
      dataBaseError: false
    }
  }
  catch(e){
    return { results: e, dataBaseError: true}
  }
}

module.exports = {
  detailAction,
}