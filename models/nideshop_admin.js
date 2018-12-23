module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_admin',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password_salt: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_login_ip: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_login_time: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    add_time: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    update_time: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    admin_role_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_admin',
  },
);