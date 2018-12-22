'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_goods_gallery',
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
      img_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      img_desc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sort_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_goods_gallery')
};
