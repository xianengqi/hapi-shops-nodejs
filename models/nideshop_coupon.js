module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_coupon',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_money: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
    },
    send_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    min_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
    },
    max_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
    },
    send_start_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    send_end_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    use_start_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    use_end_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    min_goods_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_coupon',
  },
);