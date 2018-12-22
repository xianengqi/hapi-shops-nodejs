
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_cart',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      goods_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      goods_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      retail_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      list_pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_cart')
};
