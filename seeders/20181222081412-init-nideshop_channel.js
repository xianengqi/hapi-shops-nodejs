const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_channel',
    [
      {
        "id": "1005000",
        "name": "居家",
        "url": "/pages/category/category?id=1005000",
        "icon_url": "https://yanxuan.nosdn.127.net/4f00675caefd0d4177892ad18bfc2df6.png",
        "sort_order": "1",
        ...timestamps
      }, {
        "id": "1005001",
        "name": "餐厨",
        "url": "/pages/category/category?id=1005001",
        "icon_url": "https://yanxuan.nosdn.127.net/4aab4598017b5749e3b63309d25e9f6b.png",
        "sort_order": "2",
        ...timestamps
      }, {
        "id": "1005002",
        "name": "服装",
        "url": "/pages/category/category?id=1005002",
        "icon_url": "https://yanxuan.nosdn.127.net/93168242df456b5f7bf3c89653b3db76.png",
        "sort_order": "4",
        ...timestamps
      }, {
        "id": "1008000",
        "name": "配件",
        "url": "/pages/category/category?id=1008000",
        "icon_url": "https://yanxuan.nosdn.127.net/288b0e864a24763bade8e22c0c39ff02.png",
        "sort_order": "3",
        ...timestamps
      }, {
        "id": "1019000",
        "name": "志趣",
        "url": "/pages/category/category?id=1019000",
        "icon_url": "https://yanxuan.nosdn.127.net/f0698297aaac41b778c1ea65eefb8b34.png",
        "sort_order": "5",
        ...timestamps
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_channel', {
      id: {
        [Op.in]: [1005000, 1005001, 1005002, 1008000, 1019000]
      }
    }, {});
  },
};
