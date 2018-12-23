module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_goods_attribute',
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
    attribute_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    value: DataTypes.TEXT,
  },
  {
    tableName: 'nideshop_goods_attribute',
  },
);