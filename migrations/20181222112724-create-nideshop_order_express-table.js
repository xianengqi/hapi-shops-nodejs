'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_order_express',
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
      shipper_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      shipper_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shipper_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      logistic_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      traces: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_finish: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      request_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      request_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      add_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      update_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_order_express')
};
