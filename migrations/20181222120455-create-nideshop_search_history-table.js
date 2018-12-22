'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_search_history',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      keyword: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      from: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      add_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_search_history')
};
