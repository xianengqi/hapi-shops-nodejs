// 引入 models
const models = require('../models');
const code = require('../lib/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/**
 * 添加收藏
 * @param {*} parms
 */

addCollect = async (parms) => {
  try{
    // const { openId, goodsId } = parms.request.body;
    // 判断是否搜藏过
    const iscollect = await models.nideshop_collect.findAndCountAll({
      where: {
        user_id: parms.openId,
        value_id: parms.goodsId
      }
    });
    if (iscollect.length == 0) {
      await models.nideshop_collect.create(parms, {
        where: {
          user_id: parms.openId,
          value_id: parms.goodsId
        }
      });
    } else {
      await models.nideshop_collect.findAndCountAll({
        where: {
          user_id: parms.openId,
          value_id: parms.goodsId
        }
      })
    };
    return {
      results: { 
        data: 'success'
      }
    }
  }
  catch(e){
    return { results: e, dataBaseError: true}
  }
}
/**
 * 
 */
listAction = async (request) => {
  try{
    const openId = request.query.openId;
    const data = await models.nideshop_collect.findAndCountAll({
      where: {
        user_id: openId
      }
    });
    var goodsIds = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      goodsIds.push(element.value_id)
    }
    const listData = await models.nideshop_goods.findAndCountAll({
      where: {
        id: request.query.goodsIds
      },
      attributes: ['id', 'name', 'list_pic_url', 'retail_price', 'goods_brief'],
    });
    return {
      results: {
        data,
        collectGoodsList: listData
      },
      dataBaseError: false
    }
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  }
}
/**
 * 
 */
deleteCollect = async (parms) => {
  try{
    const data = await models.nideshop_collect.destroy({
      where: {
        id: parms.id,
      }
    });
    console.log(data)
    if (data) {
      return {
        results: {
          data: "删除成功"
        },
        dataBaseError: false
      }
    } else {
      return {
        results: {
          data: '删除失败'
        },
        dataBaseError: false
      }
    }
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  }
}

module.exports = {
  addCollect,
  listAction,
  deleteCollect
}