module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_cart',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    goods_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    retail_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    list_pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'nideshop_cart',
  },
);