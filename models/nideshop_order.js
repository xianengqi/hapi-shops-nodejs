module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_order',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
    goods_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
    },
    allprice: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'nideshop_order',
  },
);