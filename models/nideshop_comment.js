module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_comment',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type_id: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    value_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    content: {
      type: DataTypes.STRING(6550),
      allowNull: false,
      defaultValue: false,
      comment: '储存为base64编码'
    },
    add_time: {
      type: DataTypes.BIGINT(12),
      allowNull: false,
      defaultValue: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    new_content: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_comment',
  },
);