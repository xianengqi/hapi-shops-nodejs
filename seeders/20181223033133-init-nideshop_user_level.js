const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_user_level',
    [
      {
        "id": "1",
        "name": "普通用户",
        "description": "0",
        ...timestamps
      }, {
        "id": "2",
        "name": "vip",
        "description": "10000",
        ...timestamps
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_user_level', {
      id: {
        [Op.in]: [1, 2]
      }
    }, {});
  },
};
