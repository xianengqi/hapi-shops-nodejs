const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_ad_position',
    [{
      id: 1,
      name: '移动端首页轮播广告',
      width: 750,
      height: 200,
      desc: '',
      ...timestamps
    }, ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_ad_position', {
      id: {
        [Op.in]: [1]
      }
    }, {});
  },
};
