module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_attribute',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    attribute_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    input_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    values: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sort_order: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_attribute'
  },
);