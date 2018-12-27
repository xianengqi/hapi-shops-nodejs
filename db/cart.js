// 引入 models
const models = require('../models');
const code = require('../lib/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

addCart = async (request) => {
  try{
    // const { number, goodsId, openId } = request.payload;
    // 判断购物车是否包含此数据
    const haveGoods = await models.nideshop_cart.findAndCountAll({
      where: {
        user_id: request.payload.openId,
        goods_id: request.payload.goodsId
      }
    });
    console.log(haveGoods);
    if (haveGoods.length == 0) {
      const goods = await models.nideshop_goods.findAndCountAll({
        where: {
          id: request.payload.goodsId
        },
      });
      const { retail_price, name, list_pic_url } = goods[0];
      console.log(goods[0]);
      // 如果不存在
       await models.nideshop_cart.create({
        user_id: openId,
        goods_id: goodsId,
        number,
        goods_name: name,
        list_pic_url,
        retail_price
      });
    } else {
      // 如果存在
      const oldNumber = await models.nideshop_cart.findAndCountAll({
        where: {
          user_id: openId,
          goods_id: goodsId
        },
        attributes: ['number']
      });
      console.log(oldNumber);
      // 更新数据
      await models.nideshop_cart.update({
        where: {
          number: oldNumber[0].number + number
        }
      });
    }
    return {
      results: {
        data: "success"
      },
      dataBaseError: false
    }
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  } 
}

cartList = async (request) => {
  try{
    // const { openId } = request.query;
    const cartList = await models.nideshop_cart.findAndCountAll({
      where: {
        user_id: request.query.openId,
      }
    });
    return {
      results: {
        data: cartList,
      },
      dataBaseError: false
    }
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  }
}

deleteAction = async (parms) => {
  const data = await models.nideshop_cart.destroy({
    where: {
       id: parms.id,
    }
  });
  console.log(data);
  if (data) {
    return {
      results: {
        data: true
      },
      dataBaseError: false
    }
  } else {
    return {
      results: {
        data: false
      },
      dataBaseError: false
    }
  }
}
module.exports = {
  addCart,
  cartList,
  deleteAction
}