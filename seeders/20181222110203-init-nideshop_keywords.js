const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_keywords',
    [
      {
        "keyword": "520元礼包抢先领",
        "is_hot": "1",
        "is_default": "1",
        "is_show": "1",
        "sort_order": "1",
        "scheme_url": "",
        "id": "1",
        "type": "0"
      }, {
        "keyword": "单鞋",
        "is_hot": "0",
        "is_default": "0",
        "is_show": "1",
        "sort_order": "8",
        "scheme_url": "",
        "id": "10",
        "type": "0"
      }, {
        "keyword": "墨镜",
        "is_hot": "0",
        "is_default": "0",
        "is_show": "1",
        "sort_order": "5",
        "scheme_url": "",
        "id": "5",
        "type": "0"
      }, {
        "keyword": "夏凉被",
        "is_hot": "0",
        "is_default": "0",
        "is_show": "1",
        "sort_order": "100",
        "scheme_url": "",
        "id": "3",
        "type": "0"
      }, {
        "keyword": "新品上市",
        "is_hot": "0",
        "is_default": "0",
        "is_show": "1",
        "sort_order": "100",
        "scheme_url": "",
        "id": "4",
        "type": "0"
      }, 
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_keywords', {
      id: {
        [Op.in]: [1,10,5,3,4,1, 1
]
      }
    }, {});
  },
};
