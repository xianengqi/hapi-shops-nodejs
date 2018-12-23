module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_admin',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_login_ip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_login_time: {
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
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_admin',
  },
);