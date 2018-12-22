'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_related_goods',
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
      related_goods_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_related_goods')
};
