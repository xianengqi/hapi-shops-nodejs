module.exports = (sequelize, DataTypes) => {
  const nideshop_goods_attribute = sequelize.define(
  'nideshop_goods_attribute',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    attribute_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
      references: {
        model: 'nideshop_attribute',
        key: 'id'
      }
    },
    value: DataTypes.TEXT,
  },
  {
    tableName: 'nideshop_goods_attribute',
  });
  nideshop_goods_attribute.associate = function (models) {
    nideshop_goods_attribute.hasMany(models.nideshop_attribute, {
      foreignKey: 'id',
      sourceKey: 'id'
    });
  }
  return nideshop_goods_attribute;
};