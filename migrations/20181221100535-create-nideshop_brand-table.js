
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_brand',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      list_pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      simple_desc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sort_order: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      is_show: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      floor_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
      },
      app_list_pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_new: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      new_pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      new_sort_order: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_brand'),
};
