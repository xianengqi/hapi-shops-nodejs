// 引入 models
const models = require('../models');
const code = require('../lib/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// 首页轮播数据
bannerHome = async (request) => {
  try{
    let { rows: results, count: totalCount } = await models.nideshop_ad.findAndCountAll({
      where: {
        ad_position_id: 1,
      },
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    return {
      results: results,
      totalCount: totalCount,
      dataBaseError: false
    }
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  }
}

module.exports = {
  bannerHome: bannerHome,
}