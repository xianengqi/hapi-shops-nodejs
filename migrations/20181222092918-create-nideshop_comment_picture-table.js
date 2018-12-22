'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_comment_picture',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      comment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sort_order: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_comment_picture')
};
