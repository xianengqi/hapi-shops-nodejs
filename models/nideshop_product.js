module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_product',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    goods_specification_ids: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goods_sn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goods_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    retail_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_product',
  },
);