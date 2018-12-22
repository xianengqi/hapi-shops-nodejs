'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_comment',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type_id: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      value_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      content: {
        type: Sequelize.STRING(6550),
        allowNull: false,
        defaultValue: false,
        comment: '储存为base64编码'
      },
      add_time: {
        type: Sequelize.BIGINT(12),
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      new_content: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_comment')
};
