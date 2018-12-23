module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_shipper',
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
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sort_order: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'nideshop_shipper',
  },
);