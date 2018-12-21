
const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'nideshop_address',
    [
      {
        id: 1,
        name: '夏能啟',
        user_id: '111',
        address: 'sad发的是',
        mobile: '15175794012',
        is_default: '0',
        address_detail: '大法师打发点啥的法撒旦法',
        ...timestamps
      },
      {
        id: 2,
        name: '能啟',
        user_id: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
        address: '广东省 广州市 海珠区',
        mobile: '020-81167888',
        is_default: '0',
        address_detail: '新港中路397号',
        ...timestamps
      },
      {
        id: 3,
        name: 'Mike.G',
        user_id: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
        address: '河北省 石家庄市 桥东区',
        mobile: '123456789',
        is_default: '1',
        address_detail: '斯柯达副科级上刊登了附近路口',
        ...timestamps
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('nideshop_address', { id: { [Op.in]: [1, 2, 3] } }, {});
  }
};
