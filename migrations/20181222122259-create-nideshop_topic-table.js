'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_topic',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: Sequelize.TEXT,
      avatar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      item_pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subtitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      topic_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      price_info: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
      },
      read_count: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      },
      scene_pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      topic_template_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      topic_tag_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      sort_order: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: true,
      },
      is_show: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_topic')
};
