module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_order_express',
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
    shipper_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    shipper_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shipper_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logistic_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    traces: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_finish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    request_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    request_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    add_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    update_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_order_express',
  },
);