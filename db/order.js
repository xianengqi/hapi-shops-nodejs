// 引入 models
const models = require('../models');
const code = require('../lib/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

submitAction = async (parms) => {
  try{
    // const { openId } = request.body.openId;
    // let goodsId = request.body.goodsId;
    // let allPrise = request.body.allPrise
    // 是否存在订单
    const isOrder = await models.nideshop_order.findAndCountAll({
      where: {
        user_id: parms.openId,
      },
    });
    /**
     * 存在
     * 
     */
    if (isOrder.length > 0) {
      //现在的goodsId加上以前的
      // goodsId = isOrder[0].goods_id + ',' + goodsId;
      // allPrise = isOrder[0].allprise + allPrise
      const data = await models.nideshop_order.findAndCountAll({
        where: {
          user_id: parms.openId,
        }
      }).update(parms,{
        where: {
          user_id: parms.openId,
          goods_id: parms.goodsId,
          allprice: parms.allPrise
        }
        
      });
      console.log(data);
      if (data) {
        return {
          results: {
            data: true,
          },
          dataBaseError: false
        }
      } else {
        return {
          results: {
            data: false,
          },
          dataBaseError: false
        }
      }
    } else {
      const data = await models.nideshop_order.create({
        user_id: parms.openId,
        goods_id: parms.goodsId,
        allprice: parms.allPrise
      });
      if (data) {
        return {
          results: {
            data: true,
          },
          dataBaseError: false
        };
      } else {
        return {
          results: {
            data: false,
          },
          dataBaseError: false
        }
      }
    }
  }
  catch(e){
    return { results: e, dataBaseError: true}
  }
}

detailAction = async (request) => {
  try{
    // const openId = request.query.openId;
    const addressId = request.query.addressId || '';
    const orderDetail = await models.nideshop_order.findAndCountAll({
      where: {
        user_id: request.query.openId,
      }
    });
    // var goodsIds = orderDetail[0].goods_id.split(",");
    // console.log(goodsIds);

    const list = await models.nideshop_cart.findAndCountAll({
      where: {
        user_id: request.query.openIder,
      }, 
    });
    // 收获地址
    // var addressList ;
 
    const addressList = await models.nideshop_address.findAndCountAll({
        where: {
          user_id: request.query.openIdUser,
          id: request.query.addressIdUser
        },
        order: [
          ['is_default', 'desc']
        ]
      });

    return {
      results: {
        orderDetail,
        list,
        // orderDetail,
        addressList
      },
      dataBaseError: false
    }
  }
  catch(e){
    return { results: e, dataBaseError: true}
  }
}

module.exports = {
  submitAction,
  detailAction
}