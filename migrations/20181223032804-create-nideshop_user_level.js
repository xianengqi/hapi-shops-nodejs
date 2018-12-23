'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_user_level',
    {
      id: {
        type: Sequelize.BOOLEAN,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_user_level'),
};
