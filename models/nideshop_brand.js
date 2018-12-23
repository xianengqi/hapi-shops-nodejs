module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_brand',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    list_pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    simple_desc: {
      type: DataTypes.STRING,
      allowNull: false,
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
    is_show: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    floor_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
    },
    app_list_pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_new: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    new_pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    new_sort_order: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'nideshop_brand',
  },
);