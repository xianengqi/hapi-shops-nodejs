module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_ad',
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ad_position_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      media_type: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_url: DataTypes.STRING,
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      end_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: true,
      },
  },
  {
    tableName: 'nideshop_ad',
  }
)