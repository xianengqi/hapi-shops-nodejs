module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_goods_issue',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    goods_id: DataTypes.TEXT,
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'nideshop_goods_issue',
  },
);