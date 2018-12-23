module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_address',
  {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.STRING,
      defaultValue: false,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    is_default: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    address_detail: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },
  {
    tableName: 'nideshop_address',
  },
)