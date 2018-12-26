// 引入 models
const models = require('../models');
const code = require('../lib/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

indexAction = async (request) => {
  try{
    const { id: categoryId } = request.query;
    // 获取所有的分类
    const data = await models.nideshop_category.findAndCountAll({
      where: {
        "parent_id": 0
      },
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    const currentCategory = [];
    if (categoryId) {
      // 获取分类里的子类
      currentCategory = await models.nideshop_category.findAndCountAll({
        where: {
          "parent_id": categoryId
        },
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
    };
    return {
      results: {
        "categoryList": data,
      },
      // totalCount: totalCount,
      dataBaseError: false
    }
  }
  catch(e){
    return { results: e, dataBaseError: true}
  }
}

// 点击右侧分类时获取左侧分类
currentAction = async (request) => {
  try{
    // const { id: categoryId } = request.query;
    const data = {};
    // 获取分类里的子类
    const currentOne = await models.nideshop_category.findAndCountAll({
      where: {
        "id": request.params.categoryId
      },
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    const subList = await models.nideshop_category.findAndCountAll({
      where: {
        "parent_id": currentOne[0].id
      },
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit, 
    });
    data.currentOne = currentOne[0];
    data.currentOne.subList = subList;
    return {
      results: {
        data: data,
      },
      // totalCount: totalCount,
      dataBaseError: false
    }
  }
  catch(e){
    return { results: e, dataBaseError: true}
  }
};
/**
 * 获取分类列表
 * 1. 需要头部导航包含的分类
 * 2. 查找导航上分类对应的商品
 */
categoryNav = async (request) => {
  try{
    const categoryId = request.query.id;
    // 获得当前分类
    const currentNav = await models.nideshop_category.findAndCountAll({
      where: {
        id: categoryId
      },

    });
    // 获得它的同类
    const navData = await models.nideshop_category.findAndCountAll({
      where: {
        "parent_id": currentNav[0].parent_id
      }
    });
    return {
      results: {
        navData,
        currentNav: currentNav[0],
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
  indexAction,
  currentAction,
  categoryNav
}