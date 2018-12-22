'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_keywords',
    { 
      keyword: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_hot: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      is_default: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      is_show: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      sort_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      scheme_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      }
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_keywords')
};
