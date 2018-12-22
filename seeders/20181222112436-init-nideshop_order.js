const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_order',
    [{
        id: 15,
        user_id: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
        goods_id: '1015007,1006013',
        allprice: '758',
        ...timestamps
      },
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_order', {
      id: {
        [Op.in]: [1, 2]
      }
    }, {});
  },
};
