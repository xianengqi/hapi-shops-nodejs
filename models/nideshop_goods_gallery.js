module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_goods_gallery',
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
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'nideshop_goods_gallery',
  },
);