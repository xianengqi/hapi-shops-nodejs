
const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'nideshop_ad',
    [
      {
        id: 1,
        ad_position_id: 1,
        media_type: '1',
        name: '合作 谁是你的菜',
        link: '',
        image_url: 'https://yanxuan.nosdn.127.net/31da695c84cabd0eaff054265da29e5c.jpg?imageView&quality=75&thumbnail=750x0',
        content: '合作 谁是你的菜',
        end_time: 0,
        enabled: '1',
        ...timestamps,
      },
      {
        id: 2,
        ad_position_id: 1,
        media_type: '1',
        name: '活动 美食节',
        link: '',
        image_url: 'https://yanxuan.nosdn.127.net/baea18aa59217cabd190b19fc1cf1617.jpg?imageView&quality=75&thumbnail=750x0',
        content: '活动 美食节',
        end_time: 0,
        enabled: '1',
        ...timestamps,
      },
      {
        id: 3,
        ad_position_id: 1,
        media_type: '1',
        name: '活动 美食节',
        link: '',
        image_url: 'https://yanxuan.nosdn.127.net/d5683f01e132851229be21c52d808b62.jpg?imageView&quality=75&thumbnail=750x0',
        content: '活动 美食节',
        end_time: 0,
        enabled: '1',
        ...timestamps,
      },
      {
        id: 4,
        ad_position_id: 1,
        media_type: '1',
        name: '活动 美食节',
        link: '',
        image_url: 'https://yanxuan.nosdn.127.net/af7d906e174cb160ab5a979310aa223d.jpg?imageView&quality=75&thumbnail=750x0',
        content: '活动 美食节',
        end_time: 0,
        enabled: '1',
        ...timestamps,
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize
    // 删除 nideshop_ad 表 id 为 1，2，3，4的记录
    return queryInterface.bulkDelete('nideshop_ad', { id: { [Op.in]: [1, 2, 3, 4] } }, {});
  }
};
