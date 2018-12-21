
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_admin',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_salt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_login_ip: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_login_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      add_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      update_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin_role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_admin'),
};
