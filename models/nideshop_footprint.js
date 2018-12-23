module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_footprint',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    add_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_footprint',
  },
);