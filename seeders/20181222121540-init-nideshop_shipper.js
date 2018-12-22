const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_shipper',
    [
      {
        "id": "1",
        "name": "顺丰速运",
        "code": "SF",
        "sort_order": "1"
      }, {
        "id": "2",
        "name": "百世快递",
        "code": "HTKY",
        "sort_order": "2"
      }, {
        "id": "3",
        "name": "中通快递",
        "code": "ZTO",
        "sort_order": "3"
      }, {
        "id": "4",
        "name": "申通快递",
        "code": "STO",
        "sort_order": "4"
      }, {
        "id": "5",
        "name": "圆通速递",
        "code": "YTO",
        "sort_order": "5"
      }, {
        "id": "6",
        "name": "韵达速递",
        "code": "YD",
        "sort_order": "6"
      }, {
        "id": "7",
        "name": "邮政快递包裹",
        "code": "YZPY",
        "sort_order": "7"
      }, {
        "id": "8",
        "name": "EMS",
        "code": "EMS",
        "sort_order": "8"
      }, {
        "id": "9",
        "name": "天天快递",
        "code": "HHTT",
        "sort_order": "9"
      }, {
        "id": "10",
        "name": "京东物流",
        "code": "JD",
        "sort_order": "10"
      }, {
        "id": "11",
        "name": "全峰快递",
        "code": "QFKD",
        "sort_order": "11"
      }, {
        "id": "12",
        "name": "国通快递",
        "code": "GTO",
        "sort_order": "12"
      }, {
        "id": "13",
        "name": "优速快递",
        "code": "UC",
        "sort_order": "13"
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_shipper', {
      id: {
        [Op.in]: [, 1, , 2, , 3, , 4, , 5, , 6, , 7, , 8, , 9, , 10, , 11, , 12, , 13,
]
      }
    }, {});
  },
};
