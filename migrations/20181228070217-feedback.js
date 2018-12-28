module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'feedbacks', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      connect: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      msg_content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      msg_time: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable(feedbacks),
};
