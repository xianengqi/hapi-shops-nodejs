module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_user_level',
  {
    id: {
      type: DataTypes.BOOLEAN,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'nideshop_user_level',
  },
);