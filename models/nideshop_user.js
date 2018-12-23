module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_user',
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
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    birthday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    register_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    last_login_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    last_login_ip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_level_id: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    register_ip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weixin_openid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'nideshop_user',
  },
);