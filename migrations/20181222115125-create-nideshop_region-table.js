'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_region',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      parent_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      agency_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_region'),
};
