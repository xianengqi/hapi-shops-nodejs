'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_order',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      },
      goods_id: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: true,
      },
      allprice: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_order')
};
