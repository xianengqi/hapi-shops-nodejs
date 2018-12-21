'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_attribute',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      attribute_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      input_type: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      values: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sort_order: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_attribute')
};
