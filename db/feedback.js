// 引入 models
const models = require('../models');
const code = require('../lib/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

submitAction = async (parms) => {
  try{
    const data = await models.feedbacks.create({
      'user_id': parms.openId,
      "user_name": parms.name,
      "msg_content": parms.content,
      "connect": parms.phone,
      "msg_time": new Date().getTime() / 100
    });
    console.log(data);
    return {
      results:  'success',
      dataBaseError: false
    };
  }
  catch(e) {
    return { results: e, dataBaseError: true}
  }
}

module.exports = {
  submitAction
}