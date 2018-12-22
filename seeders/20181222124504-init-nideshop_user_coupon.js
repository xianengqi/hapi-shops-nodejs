const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_user_coupon',
    [
      {
        "id": "1",
        "coupon_id": "3",
        "coupon_number": "0",
        "user_id": "1",
        "used_time": "1242142681",
        "order_id": "4"
      }, {
        "id": "2",
        "coupon_id": "4",
        "coupon_number": "1000003379",
        "user_id": "1",
        "used_time": "1242976699",
        "order_id": "14"
      }, {
        "id": "3",
        "coupon_id": "4",
        "coupon_number": "1000018450",
        "user_id": "0",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "4",
        "coupon_id": "4",
        "coupon_number": "1000023774",
        "user_id": "0",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "5",
        "coupon_id": "4",
        "coupon_number": "1000039394",
        "user_id": "0",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "6",
        "coupon_id": "4",
        "coupon_number": "1000049305",
        "user_id": "0",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "7",
        "coupon_id": "4",
        "coupon_number": "1000052248",
        "user_id": "0",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "8",
        "coupon_id": "4",
        "coupon_number": "1000061542",
        "user_id": "0",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "9",
        "coupon_id": "4",
        "coupon_number": "1000070278",
        "user_id": "0",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "10",
        "coupon_id": "4",
        "coupon_number": "1000080588",
        "user_id": "0",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "11",
        "coupon_id": "4",
        "coupon_number": "1000091405",
        "user_id": "0",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "24",
        "coupon_id": "3",
        "coupon_number": "0",
        "user_id": "1",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "25",
        "coupon_id": "3",
        "coupon_number": "0",
        "user_id": "1",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "26",
        "coupon_id": "3",
        "coupon_number": "0",
        "user_id": "1",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "27",
        "coupon_id": "3",
        "coupon_number": "0",
        "user_id": "1",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "28",
        "coupon_id": "3",
        "coupon_number": "0",
        "user_id": "1",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "29",
        "coupon_id": "3",
        "coupon_number": "0",
        "user_id": "1",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "30",
        "coupon_id": "3",
        "coupon_number": "0",
        "user_id": "1",
        "used_time": "0",
        "order_id": "0"
      }, {
        "id": "31",
        "coupon_id": "3",
        "coupon_number": "0",
        "user_id": "1",
        "used_time": "0",
        "order_id": "0"
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_user_coupon', {
      id: {
        [Op.in]: [, 1, , 2, , 3, , 4, , 5, , 6, , 7, , 8, , 9, , 10, , 11, , 24, , 25, , 26, , 27, , 28, , 29, , 30, , 31,
]
      }
    }, {});
  },
};
