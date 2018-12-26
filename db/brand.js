// 引入 models
const models = require('../models');
const code = require('../lib/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

listAction = async (request) => {
  try{
    var size = 5;
    let data = await models.nideshop_brand.findAndCountAll({
      attributes: [
        'id', 'name', 'floor_price', 'app_list_pic_url'
      ],
      limit: size,
      offset: (request.query.page - 1) * size,
    });
    let data1 = await models.nideshop_brand.findAndCountAll({
      attributes: [
        'id', 'name', 'floor_price', 'app_list_pic_url'
      ],
    });
    let total = parseInt(data1.length / size);
    return {
      results: {
        total: total,
        data
      },
      // totalCount: totalCount,
      dataBaseError: false
    }
  }
  catch(e){
    return { results: e, dataBaseError: true}
  }
}

detailAction = async (request) => {
  try{
    const id = request.query.id;
    let data = [{}];
    let goodsList = [];
    if (id) {
      data = await models.nideshop_brand.findAndCountAll({
        where: {
          id: id
        },
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      goodsList = await models.nideshop_goods.findAndCountAll({
        where: {
          brand_id: id,
        },
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
    };
    return {
      results: {
        data: data[0] || {},
        goodsList,
      },
      // totalCount: totalCount,
      dataBaseError: false
    }
  }
  catch(e){
    return { results: e, dataBaseError: true}
  }
}

module.exports = {
  listAction,
  detailAction,
}