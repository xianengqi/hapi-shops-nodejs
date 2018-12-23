module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_user_coupon',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    coupon_id: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    coupon_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    used_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_user_coupon',
  },
);