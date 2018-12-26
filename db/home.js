// 引入 models
const models = require('../models');
const code = require('../lib/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = async (request, reply) => {
  try{
    // 首页轮播数据
    let banner = await models.nideshop_ad.findAndCountAll({
      where: {
        ad_position_id: 1,
      },
      // limit: request.query.limit,
      // offset: (request.query.page - 1) * request.query.limit,
    });
    // 类型
    let channel = await models.nideshop_channel.findAndCountAll({
    });
    // 类型
    // 这几个id有商品详情
    let newGoods = await models.nideshop_goods.findAndCountAll({
      where: {
        id:{
          [Op.in]: [1181000, 1135002, 1134030, 1134032],
        },
        is_new: 1,
      },
    });
    /**
     * 热门商品
     * 选择对象的列字段
     * retail_price 零售价
     * goods_brief 简明描述
     */
    let hotGoods = await models.nideshop_goods.findAndCountAll({
      where: {
        is_hot: 1,
      },
      attributes: [
        'id', 'name', 'list_pic_url', 'retail_price', 'goods_brief'
      ],
      limit: 5,
      offset: (request.query.page - 1) * 5,
    });
    /**
     * 品牌列表
     */
    let brandList = await models.nideshop_brand.findAndCountAll({
      where: {
        is_new: 1,
      },
      order: [
        ["new_sort_order", 'asc']
      ],
      limit: 4,
    });
    /**
     * 主题列表
     */
    let topicList = await models.nideshop_topic.findAndCountAll({
      limit: 3,
    });
    /**
     * 类别列表
     */
    // 1, 查询到所有的主类别
    let categoryList = await models.nideshop_category.findAndCountAll({
      where: {
        parent_id: 0
      },
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    // 2. 查询主类别对应的子类别
    let newCategoryList = [];

    for (let i = 0; i < categoryList.length; i++) {
      var item = categoryList[i];
      let childCategoryIds = await models.nideshop_category.findAndCountAll({
        where: {
          parent_id: item.id,
        },
        attributes: ['id'],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      //需要变成数组形式childCategoryIds [1020000,1036002]
      childCategoryIds = childCategoryIds.map((item) => {
        return item.id;
      });
      // 在商品中找到 在childCategoryIds里的七条数据
      let categoryGoods = await models.nideshop_goods.findAndCountAll({
        where: {
          category_id: childCategoryIds
          // category_id: {
          //   [Op.in]: childCategoryIds,
          // },
        },
        attributes: ['id', 'name', 'list_pic_url', 'retail_price'],
        limit: 7,
      });
      newCategoryList.push({
        id: item.id,
        name: item.name,
        goodsList: categoryGoods
      })
    }
    return {
      results: {
        banner,
        channel,
        newGoods,
        hotGoods,
        brandList,
        topicList,
        newCategoryList,
      },
      // totalCount: totalCount,
      dataBaseError: false
    }
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  }

  
}
