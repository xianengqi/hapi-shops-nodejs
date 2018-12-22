const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_coupon',
    [
      {
        "id": "1",
        "name": "用户红包",
        "type_money": "2",
        "send_type": "0",
        "min_amount": "0",
        "max_amount": "0",
        "send_start_date": "1242057600",
        "send_end_date": "1244736000",
        "use_start_date": "1242057600",
        "use_end_date": "1250006400",
        "min_goods_amount": "500"
      }, {
        "id": "2",
        "name": "商品红包",
        "type_money": "10",
        "send_type": "1",
        "min_amount": "0",
        "max_amount": "0",
        "send_start_date": "1241971200",
        "send_end_date": "1250352000",
        "use_start_date": "1242057600",
        "use_end_date": "1250006400",
        "min_goods_amount": "500"
      }, {
        "id": "3",
        "name": "订单红包",
        "type_money": "20",
        "send_type": "2",
        "min_amount": "1500",
        "max_amount": "0",
        "send_start_date": "1242057600",
        "send_end_date": "1309363200",
        "use_start_date": "1242057600",
        "use_end_date": "1257955200",
        "min_goods_amount": "800"
      }, {
        "id": "4",
        "name": "线下红包",
        "type_money": "5",
        "send_type": "3",
        "min_amount": "0",
        "max_amount": "0",
        "send_start_date": "1242057600",
        "send_end_date": "1244736000",
        "use_start_date": "1242057600",
        "use_end_date": "1255449600",
        "min_goods_amount": "360"
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_coupon', {
      id: {
        [Op.in]: [1, 2, 3, 4]
      }
    }, {});
  },
};
