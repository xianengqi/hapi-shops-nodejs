const controllers = require('../db/index');
const middleware = require('../middleware');
const Joi = require('joi');
const { paginationDefine } = require('../lib/router-helper');
const GROUP_NAME = 'feedback';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/submitAction`,
    handler: async (request, reply) => {
      let parms = request.payload;
      let res = await controllers.feedback.submitAction(parms);
      middleware.dbErrorMiddleware(request, res, reply);
    },
    config: {
      auth: false,
      tags: ['api', GROUP_NAME],
      description: '意见反馈',
      validate: {
        // ...jwtHeaderDefine,
        payload: Joi.object().keys({
          // addressId: Joi.number().required(),
          openId: Joi.string(),
          name: Joi.string(),
          content: Joi.string(),
          phone: Joi.string(),
        })
      },
    },
  },
];