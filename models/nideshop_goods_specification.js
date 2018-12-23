module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_goods_specification',
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
    specification_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'nideshop_goods_specification',
  },
);