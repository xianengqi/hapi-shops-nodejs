// 引入 models
const models = require('../models');
const code = require('../lib/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

indexAction = async (request) => {
  try{
    const openId = request.query.openId;
    /**
     * 默认关键字
     */
    // const defaultKeyword = await models.nideshop_keywords.findAndCountAll({
    //   where: {
    //     is_default: 1
    //   },
    // });
    /**
     * 取出热闹关键字
     */
    const hotKeywordList = await models.nideshop_keywords.findAndCountAll({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('keyword')), 'keyword'], 
        'keyword', 'is_hot', 'is_default'
      ],
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    const historyData = await models.nideshop_search_history.findAndCountAll({
      where: {
        "user_id": openId
      },
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    return {
      results: {
        // defaultKeyword,
        hotKeywordList,
        historyData,
      },
      dataBaseError: false
    }
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  }
}

/**
 * 搜素的时候匹配搜索相关的
 */
helperAction = async (request) => {
  try{
    // const keyword = request.query.keyword;
    var order = request.query.order;
    if (!order) {
      order = '';
      orderBy = "id"
    } else {
       orderBy = "retail_price"
    }
    const keywords = await models.nideshop_goods.findAndCountAll({
      where: {
        name:{
          [Op.like]: '%' + request.query.keyword + '%'
        }
      },
      // 根据价格排序
      // order: [
      //   [orderBy, order]
      // ],
      attributes: ['id', 'name', 'list_pic_url', 'retail_price'],
      limit: request.query.limit,
      offset: (request.query.page - 1) * request.query.limit,
    });
    return {
      results: {
        keywords: keywords || []
      },
      dataBaseError: false
    }
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  }
}

/**
 * 添加搜索历史
 */
addHistoryAction = async (openId, keyword) => {
  try{
    // const { openId, keyword } = request.payload;
    const oldData = await models.nideshop_search_history.findAndCountAll({
      where: {
        user_id: openId,
        keyword: keyword
      }
    });
    if (oldData.length == 0) {
      const data = await models.nideshop_search_history.create({ 
          user_id: openId,
          keyword: keyword,
          add_time: parseInt(new Date().getTime() / 1000),
      });
      if (data) {
        return {
          results: {data: "success"}
        }
      } else {
        return {
          results: { data: "fail" }
        }
      }
    } else {
      return {
        results: {
          data: "已经有记录了"
        }
      }
    }
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  }
}

/**
 *  清除历史记录
 */
clearhistoryAction = async (parms) => {
  try{
    // const openId = request.body.openId;
    const data = await models.nideshop_search_history.destroy({
      where: {
        user_id: parms.id
      },
    });
    if (data) {
      return {
        results: {
          data: ' 清楚成功'
        }
      }
    } else {
      return {
        results: {
          data: null
        }
      }
    }
  }
  catch(e){
    return { results: e, dataBaseError: true}
  }
}

module.exports = {
  indexAction,
  helperAction,
  addHistoryAction,
  clearhistoryAction
}