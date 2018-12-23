module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_order_goods',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    goods_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goods_sn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: true,
    },
    market_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
    },
    retail_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
    },
    goods_specifition_name_value: DataTypes.TEXT,
    is_real: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    goods_specifition_ids: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    list_pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'nideshop_order_goods',
  },
);