module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_topic_category',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'nideshop_topic_category',
  },
);