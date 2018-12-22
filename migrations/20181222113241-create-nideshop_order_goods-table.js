'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_order_goods',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      goods_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      goods_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      goods_sn: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: true,
      },
      market_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
      },
      retail_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
      },
      goods_specifition_name_value: Sequelize.TEXT,
      is_real: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      goods_specifition_ids: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      list_pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_order_goods')
};
