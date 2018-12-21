
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_ad',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ad_position_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      media_type: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image_url: Sequelize.STRING,
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true, 
      },
      end_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_ad'),
};
