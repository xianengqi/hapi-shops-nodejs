const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_attribute_category',
    [
      {
        id: 1008002,
        name: '布艺软装',
        enabled: '1',
        ...timestamps
      },
      {
        id: 1008008,
        name: '被枕',
        enabled: '1',
        ...timestamps
      },
      {
        id: 1008009,
        name: '床品件套',
        enabled: '1',
        ...timestamps
      },
      {
        id: 1008016,
        name: '灯具',
        enabled: '1',
        ...timestamps
      },
      {
        id: 1011004,
        name: '家饰',
        enabled: '1',
        ...timestamps
      },
      {
        id: 1015000,
        name: '家具',
        enabled: '1',
        ...timestamps
      },
      {
        id: 1017000,
        name: '宠物',
        enabled: '1',
        ...timestamps
      },
      {
        id: 1036000,
        name: '夏凉',
        enabled: '1',
        ...timestamps
      },
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_attribute_category', {
      id: {
        [Op.in]: [1008002, 1008008, 1008009, 1008016, 1011004, 1015000, 1017000, 1036000]
      }
    }, {});
  },
};
