module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_address',
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
    user_id: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    address_detail: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    tableName: 'nideshop_address',
  },
)