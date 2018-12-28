module.exports = (sequelize, DataTypes) => sequelize.define(
  'feedbacks', {
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
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    connect: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    msg_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    msg_time: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    tableName: 'feedbacks'
  }
)