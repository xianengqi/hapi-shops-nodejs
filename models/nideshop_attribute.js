module.exports = (sequelize, DataTypes) => {
  const nideshop_attribute = sequelize.define(
  'nideshop_attribute',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      references: {
        model: 'nideshop_goods_attribute',
        key: 'id'
      }
    },
    attribute_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    input_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    values: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sort_order: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'nideshop_attribute'
  });
  nideshop_attribute.associate = function (models) {
    nideshop_attribute.belongsTo(models.nideshop_goods_attribute, {
      foreignKey: 'attribute_id',
      sourceKey: 'id'
    });
  }
  return nideshop_attribute;
}