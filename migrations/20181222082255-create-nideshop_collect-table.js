'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_collect',
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
      value_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      add_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      is_attention: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    },
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_collect'),
};
