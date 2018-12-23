module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_ad_position',
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
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'nideshop_ad_position',
  },
);