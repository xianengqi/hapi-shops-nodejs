'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_shipper',
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
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sort_order: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_shipper')
};
