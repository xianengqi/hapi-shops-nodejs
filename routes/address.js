const GROUP_NAME = 'address';

module.exports = [
  {
    method: 'PUT',
    path: `/${GROUP_NAME}/{addressId}/saveAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '保存和更新收货地址',
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{addressList}/getListAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取收货地址列表',
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{detailData}/detailAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取收货地址详情',
    },
  },
  {
    method: 'DELETE',
    path: `/${GROUP_NAME}/{delData}/deleteAction`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '删除收货地址',
    },
  },
];