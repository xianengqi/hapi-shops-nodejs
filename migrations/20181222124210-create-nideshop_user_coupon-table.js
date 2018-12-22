'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_user_coupon',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      coupon_id: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      coupon_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      used_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('nideshop_user_coupon')
};
