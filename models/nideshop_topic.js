module.exports = (sequelize, DataTypes) => sequelize.define(
  'nideshop_topic',
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
    content: DataTypes.TEXT,
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    topic_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    price_info: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: false,
    },
    read_count: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
    scene_pic_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    topic_template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    topic_tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    sort_order: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: true,
    },
    is_show: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'nideshop_topic',
  },
);