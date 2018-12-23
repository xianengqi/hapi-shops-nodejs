module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_search_history',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    keyword: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    add_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'nideshop_search_history',
  },
);