// 引入 models
const models = require('../models');
const code = require('../lib/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/**
 * 专题列表
 */
listAction = async (request) => {
  try{
    const data = await models.nideshop_topic.findAndCountAll({
      attributes: ['id', 'title', 'price_info', 'scene_pic_url', 'subtitle'],
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    return {
      results: data, 
      dataBaseError: false
    }
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  }
}
/**
 * 列表详情， 下方还有四个专题推荐
 */
detailAction = async (request) => {
  try{
    const id = request.query.id
    let data = [];
      data = await models.nideshop_topic.findAndCountAll({
        where: {
          "id": id
        },
      });
    const recommendList = await models.nideshop_topic.findAndCountAll({
      attributes: ['id', 'title', 'price_info', 'scene_pic_url', 'subtitle'],
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    return {
      results: {
        data,
        recommendList
      },
      dataBaseError: false
    }
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  }
}

module.exports = {
  listAction,
  detailAction
}