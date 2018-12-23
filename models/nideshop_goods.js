module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_goods',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    goods_sn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    goods_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    keywords: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goods_brief: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goods_desc: DataTypes.TEXT,
    is_on_sale: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    add_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: true,
    },
    is_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    attribute_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    counter_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
      comment: '专柜价格'
    },
    extra_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
      comment: '附加价格'
    },
    is_new: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    goods_unit: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '商品单位'
    },
    primary_pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '商品主图'
    },
    list_pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '商品列表图'
    },
    retail_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
      comment: '零售价格'
    },
    sell_volume: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
      comment: '销售量'
    },
    primary_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
      comment: '主sku　product_id'
    },
    unit_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
      comment: '单位价格，单价'
    },
    promotion_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    promotion_tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    app_exclusive_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
      comment: 'APP专享价'
    },
    is_app_exclusive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: '是否是APP专属'
    },
    is_limited: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_hot: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_goods',
  },
);