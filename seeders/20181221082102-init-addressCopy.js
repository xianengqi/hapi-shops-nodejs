const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_address_copy',
    [
      {
        id: 1,
        name: '夏能啟',
        user_id: 111,
        address: 'sad发的是',
        mobile: '15175794012',
        is_default: '0',
        address_detail: '大法师打发点啥的法撒旦法',
        ...timestamps
      },
      {
        id: 2,
        name: '能啟',
        user_id: 222,
        address: 'sad发的是',
        mobile: '15175794012',
        is_default: '1',
        address_detail: '湖北省武汉市东西湖区',
        ...timestamps
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('nideshop_address_copy', { id: { [Op.in]: [1, 2] } }, {});
  },
};
