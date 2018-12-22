'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_goods_attribute',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      goods_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      attribute_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      value: Sequelize.TEXT,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_goods_attribute')
};
