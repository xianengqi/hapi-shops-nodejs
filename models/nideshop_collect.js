module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_collect',
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
    value_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    add_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    is_attention: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_collect',
  },
);