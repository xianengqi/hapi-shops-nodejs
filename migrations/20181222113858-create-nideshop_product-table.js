'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_product',
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
      goods_specification_ids: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      goods_sn:{ 
        type: Sequelize.STRING,
        allowNull: false,
      },
      goods_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      retail_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_product')
};
