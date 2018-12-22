'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_goods',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      goods_sn: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      goods_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      keywords: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      goods_brief: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      goods_desc: Sequelize.TEXT,
      is_on_sale: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      add_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      sort_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: true,
      },
      is_delete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      attribute_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      counter_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
        comment: '专柜价格'
      },
      extra_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
        comment: '附加价格'
      },
      is_new: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      goods_unit: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '商品单位'
      },
      primary_pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '商品主图'
      },
      list_pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '商品列表图'
      },
      retail_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
        comment: '零售价格'
      },
      sell_volume: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
        comment: '销售量'
      },
      primary_product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
        comment: '主sku　product_id'
      },
      unit_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
        comment: '单位价格，单价'
      },
      promotion_desc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      promotion_tag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      app_exclusive_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
        comment: 'APP专享价'
      },
      is_app_exclusive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: '是否是APP专属'
      },
      is_limited: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_hot: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_goods')
};
