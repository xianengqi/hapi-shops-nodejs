const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_specification',
    [
      {
        "id": "1",
        "name": "颜色",
        "sort_order": "1"
      }, {
        "id": "2",
        "name": "规格",
        "sort_order": "2"
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_specification', {
      id: {
        [Op.in]: [1, 2]
      }
    }, {});
  },
};
