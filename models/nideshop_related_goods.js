module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_related_goods',
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
    related_goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_related_goods',
  },
);