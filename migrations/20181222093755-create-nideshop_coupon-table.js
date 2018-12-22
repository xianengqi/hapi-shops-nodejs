'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_coupon',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_money: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
      },
      send_type:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      min_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
      },
      max_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
      },
      send_start_date: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      send_end_date: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      use_start_date: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      use_end_date: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      min_goods_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_coupon')
};
