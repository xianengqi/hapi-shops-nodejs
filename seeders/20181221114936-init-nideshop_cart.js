const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_cart',
    [
      {
        id: 83,
        user_id: '11',
        goods_id: 1092024,
        goods_name: '双宫茧纱布亲肤手工蚕丝被',
        retail_price: '1599.00',
        number: 1,
        list_pic_url: 'http://yanxuan.nosdn.127.net/f245a86dcb9f455217241e437b203926.png',
        ...timestamps
      },
      {
        id: 129,
        user_id: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
        goods_id: 1015007,
        goods_name: '典雅美式全棉刺绣抱枕',
        retail_price: '59.00',
        number: 1,
        list_pic_url: 'http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png',
        ...timestamps
      },
      {
        id: 125,
        user_id: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
        goods_id: 1006013,
        goods_name: '双宫茧桑蚕丝被 空调被',
        retail_price: '699.00',
        number: 1,
        list_pic_url: 'http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png',
        ...timestamps
      },
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_cart', {
      id: {
        [Op.in]: [1008002, 1008008, 1008009, 1008016, 1011004, 1015000, 1017000, 1036000]
      }
    }, {});
  },
};
