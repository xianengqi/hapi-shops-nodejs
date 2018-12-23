module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_comment_picture',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sort_order: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'nideshop_comment_picture',
  },
);